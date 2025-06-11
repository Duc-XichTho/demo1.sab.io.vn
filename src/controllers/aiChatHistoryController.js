import { aiChatHistoryService } from "../services/aiChatHistoryService.js";

export const aiChatHistoryController = {
    async create(req, res) {
        try {
            const data = req.body;
            const result = await aiChatHistoryService.create(data);
            res.status(201).json({
                success: true,
                data: result
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: error.message
            });
        }
    },

    async findAll(req, res) {
        try {
            const result = await aiChatHistoryService.findAll();
            res.status(200).json({
                success: true,
                data: result
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: error.message
            });
        }
    },

    async findById(req, res) {
        try {
            const { id } = req.params;
            const result = await aiChatHistoryService.findById(id);
            if (!result) {
                return res.status(404).json({
                    success: false,
                    message: "AiChatHistory not found"
                });
            }
            res.status(200).json({
                success: true,
                data: result
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: error.message
            });
        }
    },

    async update(req, res) {
        try {
            const data = req.body;
            const result = await aiChatHistoryService.update(data);
            if (!result) {
                return res.status(404).json({
                    success: false,
                    message: "AiChatHistory not found"
                });
            }
            res.status(200).json({
                success: true,
                data: result
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: error.message
            });
        }
    },

    async delete(req, res) {
        try {
            const { id } = req.params;
            const result = await aiChatHistoryService.delete(id);
            if (!result) {
                return res.status(404).json({
                    success: false,
                    message: "AiChatHistory not found"
                });
            }
            res.status(200).json({
                success: true,
                message: "AiChatHistory deleted successfully"
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: error.message
            });
        }
    }
}; 