import { khkdService } from "../services/khkdService.js";

export const khkdController = {
    async create(req, res) {
        try {
            const data = req.body;
            const result = await khkdService.create(data);
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
            const result = await khkdService.findAll();
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
            const result = await khkdService.findById(id);
            if (!result) {
                return res.status(404).json({
                    success: false,
                    message: "KHKD not found"
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
            const result = await khkdService.update(id, data);
            if (!result) {
                return res.status(404).json({
                    success: false,
                    message: "KHKD not found"
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
            const result = await khkdService.delete(id);
            if (!result) {
                return res.status(404).json({
                    success: false,
                    message: "KHKD not found"
                });
            }
            res.status(200).json({
                success: true,
                message: "KHKD deleted successfully"
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: error.message
            });
        }
    }
}; 