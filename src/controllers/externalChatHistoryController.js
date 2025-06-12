
// Lấy lịch sử chat của user
import {deleteExternalChatHistory, getChatStats, getUserExternalChatHistory} from "../services/externalChatHistoryService.js";

export const getExternalChatHistory = async (req, res) => {
    try {
        const { email } = req.body; // Lấy email từ request body
        const { limit } = req.query;
        
        if (!email) {
            return res.status(400).json({
                success: false,
                message: 'Email không được để trống'
            });
        }

        const history = await getUserExternalChatHistory(email, limit ? parseInt(limit) : 50);
        
        return res.status(200).json({
            success: true,
            data: history
        });
    } catch (error) {
        console.error('Lỗi khi lấy lịch sử chat:', error);
        return res.status(500).json({
            success: false,
            message: 'Đã có lỗi xảy ra khi lấy lịch sử chat'
        });
    }
};

// Xóa lịch sử chat của user
export const clearExternalChatHistory = async (req, res) => {
    try {
        const { email } = req.query; // Lấy email từ query parameters
        
        if (!email) {
            return res.status(400).json({
                success: false,
                message: 'Email không được để trống'
            });
        }

        await deleteExternalChatHistory(email);
        
        return res.status(200).json({
            success: true,
            message: 'Đã xóa lịch sử chat thành công'
        });
    } catch (error) {
        console.error('Lỗi khi xóa lịch sử chat:', error);
        return res.status(500).json({
            success: false,
            message: 'Đã có lỗi xảy ra khi xóa lịch sử chat'
        });
    }
};

// Lấy thống kê chat của user
export const getUserChatStats = async (req, res) => {
    try {
        const { email } = req.body; // Lấy email từ request body
        
        if (!email) {
            return res.status(400).json({
                success: false,
                message: 'Email không được để trống'
            });
        }

        const stats = await getChatStats(email);
        
        return res.status(200).json({
            success: true,
            data: stats
        });
    } catch (error) {
        console.error('Lỗi khi lấy thống kê chat:', error);
        return res.status(500).json({
            success: false,
            message: 'Đã có lỗi xảy ra khi lấy thống kê chat'
        });
    }
}; 