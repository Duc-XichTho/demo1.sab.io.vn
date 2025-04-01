import {
    getConversationByEmail,
    updateConversation
} from '../services/conversationService.js';

// GET
export const getConversationByEmailController = async (req, res) => {
    const { email } = req.params;
    try {
        const data = await getConversationByEmail(email);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: 'Lỗi khi lấy bản ghi Conversation: ' + error.message });
    }
};

// UPDATE
export const updateConversationController = async (req, res) => {
    const newData = req.body;
    try {
        const data = await updateConversation(newData);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: 'Lỗi khi cập nhật bản ghi Conversation: ' + error.message });
    }
};