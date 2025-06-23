import { aiGenHistoryService } from "../services/aiGenHistoryService.js";

export const aiGenHistoryController = {
    async create(req, res) {
        try {
            const data = req.body;
            const result = await aiGenHistoryService.create(data);
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
            const result = await aiGenHistoryService.findAll();
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
            const result = await aiGenHistoryService.findById(id);
            if (!result) {
                return res.status(404).json({
                    success: false,
                    message: "AiGenHistory not found"
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
            const result = await aiGenHistoryService.update(data);
            if (!result) {
                return res.status(404).json({
                    success: false,
                    message: "AiGenHistory not found"
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
            const result = await aiGenHistoryService.delete(id);
            if (!result) {
                return res.status(404).json({
                    success: false,
                    message: "AiGenHistory not found"
                });
            }
            res.status(200).json({
                success: true,
                message: "AiGenHistory deleted successfully"
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: error.message
            });
        }
    }
}; 