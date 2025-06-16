import { ChatHistoryFile } from '../postgres/postgres.js';
import { Op } from 'sequelize';

// Lấy lịch sử chat của một user
export const getUserChatHistoryFile = async (user_email, id_file ,  limit = 50) => {
    return await ChatHistoryFile.findAll({
        where: {
            user_email,
            id_file
        },
        attributes: {
            exclude: ['similar_passages'] // Bỏ trường này
        },
        order: [['created_at', 'ASC']],
        limit
    });
};

// Xóa lịch sử chat của một user
export const deleteChatHistoryFile = async (user_email) => {
    return await ChatHistoryFile.destroy({
        where: {
            user_email
        }
    });
};


// Lấy thống kê chat của user
export const getChatStats = async (user_email) => {
    const totalChats = await ChatHistoryFile.count({
        where: {
            user_email
        }
    });

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const chatsToday = await ChatHistoryFile.count({
        where: {
            user_email,
            question_time: {
                [Op.gte]: today
            }
        }
    });

    return {
        totalChats,
        chatsToday
    };
}; 