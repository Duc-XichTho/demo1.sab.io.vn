import { ktqtImportHistoryService } from "../services/ktqtImportHistoryService.js";

export const ktqtImportHistoryController = {
    async create(req, res) {
        try {
            const data = req.body;
            const result = await ktqtImportHistoryService.create(data);
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
            const result = await ktqtImportHistoryService.findAll();
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
            const result = await ktqtImportHistoryService.findById(id);
            if (!result) {
                return res.status(404).json({
                    success: false,
                    message: "KtqtImportHistory not found"
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
            const result = await ktqtImportHistoryService.update(data);
            if (!result) {
                return res.status(404).json({
                    success: false,
                    message: "KtqtImportHistory not found"
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
            const result = await ktqtImportHistoryService.delete(id);
            if (!result) {
                return res.status(404).json({
                    success: false,
                    message: "KtqtImportHistory not found"
                });
            }
            res.status(200).json({
                success: true,
                message: "KtqtImportHistory deleted successfully"
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: error.message
            });
        }
    },

    async hideAllByImportType(req, res) {
        try {
            const { import_type } = req.body;
            if (!import_type) return res.status(400).json({ success: false, message: "import_type is required" });
            const result = await ktqtImportHistoryService.hideAllByImportType(import_type);
            res.status(200).json({ success: true, ...result });
        } catch (error) {
            res.status(500).json({ success: false, message: error.message });
        }
    }
}; 