import e from "express";
import { Conversation } from "../postgres/postgres.js";

// GET
export const getConversationByEmail = async (email) => {
    try {
        const data = await Conversation.findOrCreate({
            where: {
                user_email: email,
            },
            default: {
                user_email: email,
                conversation: [],
            },
        });
        return data;
    } catch (error) {
        throw new Error('Lỗi khi lấy bản ghi Conversation: ' + error.message);
    }
};

// UPDATE
export const updateConversation = async (newData) => {
    try {
        const { id } = newData;
        const data = await Conversation.findByPk(id);
        if (!data) {
            throw new Error('Bản ghi Conversation không tồn tại');
        }
        const result = await data.update(newData);
        return result;
    } catch (error) {
        throw new Error('Lỗi khi lấy bản ghi Conversation: ' + error.message);
    }
};