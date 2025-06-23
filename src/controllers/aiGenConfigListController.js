import { aiGenConfigListService } from "../services/aiGenConfigListService.js";

export const aiGenConfigListController = {
    async create(req, res) {
        try {
            const data = req.body;
            const result = await aiGenConfigListService.create(data);
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
            const result = await aiGenConfigListService.findAll();
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
            const result = await aiGenConfigListService.findById(id);
            if (!result) {
                return res.status(404).json({
                    success: false,
                    message: "AiGenConfigList not found"
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
            const result = await aiGenConfigListService.update(data);
            if (!result) {
                return res.status(404).json({
                    success: false,
                    message: "AiGenConfigList not found"
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
            const result = await aiGenConfigListService.delete(id);
            if (!result) {
                return res.status(404).json({
                    success: false,
                    message: "AiGenConfigList not found"
                });
            }
            res.status(200).json({
                success: true,
                message: "AiGenConfigList deleted successfully"
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: error.message
            });
        }
    }
}; 