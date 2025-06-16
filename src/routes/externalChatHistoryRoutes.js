import express from 'express';
import { getExternalChatHistory, clearExternalChatHistory, getUserChatStats, deleteExternalChatHistoryController } from '../controllers/externalChatHistoryController.js';

const router = express.Router();

// Lấy lịch sử chat của user
router.post('/', getExternalChatHistory);

// Xóa lịch sử chat của user
router.delete('/', clearExternalChatHistory);

// Lấy thống kê chat của user
router.post('/stats', getUserChatStats);

// Xóa lịch sử chat của user
router.delete('/:id', deleteExternalChatHistoryController);
export default router; 