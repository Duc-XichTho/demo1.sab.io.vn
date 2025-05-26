import { ktqtImportService } from "../services/ktqtImportService.js";

export const ktqtImportController = {
    async create(req, res) {
        try {
            const data = req.body;
            const result = await ktqtImportService.create(data);
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
            const result = await ktqtImportService.findAll();
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
            const result = await ktqtImportService.findById(id);
            if (!result) {
                return res.status(404).json({
                    success: false,
                    message: "KtqtImport not found"
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
            const result = await ktqtImportService.update(id, data);
            if (!result) {
                return res.status(404).json({
                    success: false,
                    message: "KtqtImport not found"
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
            const result = await ktqtImportService.delete(id);
            if (!result) {
                return res.status(404).json({
                    success: false,
                    message: "KtqtImport not found"
                });
            }
            res.status(200).json({
                success: true,
                message: "KtqtImport deleted successfully"
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: error.message
            });
        }
    }
}; 