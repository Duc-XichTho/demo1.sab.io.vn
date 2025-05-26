import { ktqtMappingService } from "../services/ktqtMappingService.js";

export const ktqtMappingController = {
    async create(req, res) {
        try {
            const data = req.body;
            const result = await ktqtMappingService.create(data);
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
            const result = await ktqtMappingService.findAll();
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
            const result = await ktqtMappingService.findById(id);
            if (!result) {
                return res.status(404).json({
                    success: false,
                    message: "KtqtMapping not found"
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
            const { id } = req.params;
            const data = req.body;
            const result = await ktqtMappingService.update(id, data);
            if (!result) {
                return res.status(404).json({
                    success: false,
                    message: "KtqtMapping not found"
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
            const result = await ktqtMappingService.delete(id);
            if (!result) {
                return res.status(404).json({
                    success: false,
                    message: "KtqtMapping not found"
                });
            }
            res.status(200).json({
                success: true,
                message: "KtqtMapping deleted successfully"
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: error.message
            });
        }
    }
}; 