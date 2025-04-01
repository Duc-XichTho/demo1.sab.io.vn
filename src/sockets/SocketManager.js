import { createMessage } from '../services/messageService.js';

export const setupSocketIO = (io) => {
    // Keep track of users in different rooms (ticketId)
    const users = {};
    const userSocketMap = {};

    io.on('connection', (socket) => {
        console.log('New client connected', socket.id);

        // Handle joining a chat room (based on ticket ID)
        socket.on('join_room', ({ ticketId, userId, username }) => {
            socket.join(`ticket_${ticketId}`);

            // Add user to users list for this room
            if (!users[`ticket_${ticketId}`]) {
                users[`ticket_${ticketId}`] = [];
            }

            users[`ticket_${ticketId}`].push({
                socketId: socket.id,
                userId,
                username
            });

            userSocketMap[socket.id] = {
                ticketId,
                userId,
                username
            };

            // Notify room that user has joined
            io.to(`ticket_${ticketId}`).emit('user_joined', {
                users: users[`ticket_${ticketId}`],
                username,
                userId
            });

            console.log(`User ${username} joined ticket_${ticketId}`);
        });

        // Handle receiving a message
        socket.on('send_message', async (messageData) => {
            try {
                // Save message to database
                const savedMessage = await createMessage({
                    message: messageData.message,
                    name: messageData.name,
                    user: messageData.userId,
                    ticket_Id: messageData.ticketId,
                    mention: messageData.mentions || [],
                    type: messageData.type || 'text'
                });

                // Broadcast message to everyone in the room
                io.to(`ticket_${messageData.ticketId}`).emit('receive_message', {
                    ...savedMessage.dataValues,
                    createdAt: new Date()
                });
            } catch (error) {
                console.error('Error saving message:', error);
                socket.emit('message_error', {
                    error: 'Failed to save message',
                    details: error.message
                });
            }
        });

        // Handle typing indicator
        socket.on('typing', ({ ticketId, username, isTyping }) => {
            socket.to(`ticket_${ticketId}`).emit('user_typing', {
                username,
                isTyping
            });
        });

        // Handle disconnection
        socket.on('disconnect', () => {
            console.log('Client disconnected', socket.id);

            // Remove user from rooms they were in
            const userInfo = userSocketMap[socket.id];

            if (userInfo) {
                const { ticketId, username } = userInfo;
                const roomId = `ticket_${ticketId}`;

                if (users[roomId]) {
                    users[roomId] = users[roomId].filter(user => user.socketId !== socket.id);

                    // Notify room that user has left
                    io.to(roomId).emit('user_left', {
                        users: users[roomId],
                        username,
                        userId: userInfo.userId
                    });
                }

                delete userSocketMap[socket.id];
            }
        });
    });
}; 