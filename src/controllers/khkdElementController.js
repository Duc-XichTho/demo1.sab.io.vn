import {khkdElementService} from "../services/khkdElementService.js";

export const khkdElementController = {
    async create(req, res) {
        try {
            const data = req.body;
            const result = await khkdElementService.create(data);
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
            const result = await khkdElementService.findAll();
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

    async findAllByKhoanMuc(req, res) {
        try {
            const { khoanMuc } = req.params;
            const result = await khkdElementService.findByKhoanMuc(khoanMuc)
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

    async findByLabelSoLuong(req, res) {
        try {
            const { labelSoLuong } = req.params;
            const result = await khkdElementService.findByLabelSoLuong(labelSoLuong)
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
            const result = await khkdElementService.findById(id);
            if (!result) {
                return res.status(404).json({
                    success: false,
                    message: "KHKDElement not found"
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

    async findByKHKDId(req, res) {
        try {
            const { khkdId } = req.params;
            const result = await khkdElementService.findByKHKDId(khkdId);
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
            const result = await khkdElementService.update(id, data);
            if (!result) {
                return res.status(404).json({
                    success: false,
                    message: "KHKDElement not found"
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
            const result = await khkdElementService.delete(id);
            if (!result) {
                return res.status(404).json({
                    success: false,
                    message: "KHKDElement not found"
                });
            }
            res.status(200).json({
                success: true,
                message: "KHKDElement deleted successfully"
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: error.message
            });
        }
    }
}; 