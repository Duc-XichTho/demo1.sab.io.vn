import { aiFreeChatHistoryService } from "../services/aiFreeChatHistoryService.js";

export const aiFreeChatHistoryController = {
    async create(req, res) {
        try {
            const data = req.body;
            const result = await aiFreeChatHistoryService.create(data);
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
            const result = await aiFreeChatHistoryService.findAll();
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
            const result = await aiFreeChatHistoryService.findById(id);
            if (!result) {
                return res.status(404).json({
                    success: false,
                    message: "AiFreeChatHistory not found"
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
            const result = await aiFreeChatHistoryService.update(data);
            if (!result) {
                return res.status(404).json({
                    success: false,
                    message: "AiFreeChatHistory not found"
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
            const result = await aiFreeChatHistoryService.delete(id);
            if (!result) {
                return res.status(404).json({
                    success: false,
                    message: "AiFreeChatHistory not found"
                });
            }
            res.status(200).json({
                success: true,
                message: "AiFreeChatHistory deleted successfully"
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: error.message
            });
        }
    }
}; 