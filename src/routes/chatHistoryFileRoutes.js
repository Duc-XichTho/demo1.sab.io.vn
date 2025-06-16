import express from 'express';
import { getChatHistoryFile, clearChatHistoryFile, getUserChatStats } from '../controllers/chatHistoryFileController.js';

const router = express.Router();

// Lấy lịch sử chat của user
router.post('/', getChatHistoryFile);

// Xóa lịch sử chat của user
router.delete('/', clearChatHistoryFile);

// Lấy thống kê chat của user
router.post('/stats', getUserChatStats);

export default router; 