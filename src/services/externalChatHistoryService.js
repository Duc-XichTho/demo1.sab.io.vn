import { ExternalChatHistory } from '../postgres/postgres.js';
import { Op } from 'sequelize';

// Lấy lịch sử chat của một user
export const getUserExternalChatHistory = async (user_email, limit = 50) => {
    return await ExternalChatHistory.findAll({
        where: {
            user_email
        },
        attributes: {
            exclude: ['similar_passages'] // Bỏ trường này
        },
        order: [['created_at', 'ASC']],
        limit
    });
};

// Xóa lịch sử chat của một user
export const deleteExternalChatHistory = async (user_email) => {
    return await ExternalChatHistory.destroy({
        where: {
            user_email
        }
    });
};


// Lấy thống kê chat của user
export const getChatStats = async (user_email) => {
    const totalChats = await ExternalChatHistory.count({
        where: {
            user_email
        }
    });

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const chatsToday = await ExternalChatHistory.count({
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