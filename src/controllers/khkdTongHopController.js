import { khkdTongHopService } from "../services/khkdTongHopService.js";

export const khkdTongHopController = {
    async create(req, res) {
        try {
            const data = req.body;
            const result = await khkdTongHopService.create(data);
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
            const result = await khkdTongHopService.findAll();
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
            const result = await khkdTongHopService.findById(id);
            if (!result) {
                return res.status(404).json({
                    success: false,
                    message: "KHKDTongHop not found"
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
            const result = await khkdTongHopService.update(id, data);
            if (!result) {
                return res.status(404).json({
                    success: false,
                    message: "KHKDTongHop not found"
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
            const result = await khkdTongHopService.delete(id);
            if (!result) {
                return res.status(404).json({
                    success: false,
                    message: "KHKDTongHop not found"
                });
            }
            res.status(200).json({
                success: true,
                message: "KHKDTongHop deleted successfully"
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: error.message
            });
        }
    }
}; 