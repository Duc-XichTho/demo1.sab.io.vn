import { io } from 'socket.io-client';

// Create a singleton Socket.io instance
class SocketManager {
    constructor() {
        this.socket = null;
    }

    connect(token) {
        if (!this.socket) {
            this.socket = io(process.env.URL_BACKEND_AUTH_SERVICE, {
                auth: {
                    token
                },
                withCredentials: true
            });

            this.socket.on('connect', () => {
                console.log('Connected to WebSocket server');
            });

            this.socket.on('disconnect', () => {
                console.log('Disconnected from WebSocket server');
            });

            this.socket.on('connect_error', (error) => {
                console.error('WebSocket connection error:', error);
            });

            // Join room when requested
            this.socket.on('join', ({ ticketId }) => {
                console.log(`Joining room for ticket: ${ticketId}`);
                this.socket.join(`ticket-${ticketId}`);
            });

            // Alternative join event names
            this.socket.on('join-room', ({ ticketId }) => {
                this.socket.join(`ticket-${ticketId}`);
            });

            this.socket.on('join-ticket', ({ ticketId }) => {
                this.socket.join(`ticket-${ticketId}`);
            });

            // Handle incoming messages
            // Listen for message events from frontend
            const messageEventNames = [
                'message', 'send-message', 'chat-message', 'new-message',
                'send_message', 'chat_message', 'new_message'
            ];

            messageEventNames.forEach(eventName => {
                this.socket.on(eventName, (data) => {
                    console.log(`Received '${eventName}' event:`, data);
                    const ticketId = data.ticket_Id || data.ticketId;
                    if (ticketId) {
                        // Broadcast to the ticket room
                        this.socket.to(`ticket-${ticketId}`).emit('message', data);
                    }
                });
            });

            // Handle message deletion
            const deleteEventNames = [
                'delete-message', 'message-deleted', 'remove-message',
                'delete_message', 'message_deleted', 'remove_message'
            ];

            deleteEventNames.forEach(eventName => {
                this.socket.on(eventName, (data) => {
                    console.log(`Received delete message event '${eventName}':`, data);
                    const ticketId = data.ticket_Id || data.ticketId;
                    if (ticketId) {
                        // Broadcast deletion to the ticket room
                        this.socket.to(`ticket-${ticketId}`).emit('delete-message', data);
                    }
                });
            });
        }

        return this.socket;
    }

    disconnect() {
        if (this.socket) {
            this.socket.disconnect();
            this.socket = null;
        }
    }

    getSocket() {
        return this.socket;
    }
}

export default new SocketManager();