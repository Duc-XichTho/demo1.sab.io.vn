import { aiQuestionTemplateService } from "../services/aiQuestionTemplateService.js";

export const aiQuestionTemplateController = {
    async create(req, res) {
        try {
            const data = req.body;
            const result = await aiQuestionTemplateService.create(data);
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
            const result = await aiQuestionTemplateService.findAll();
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
            const result = await aiQuestionTemplateService.findById(id);
            if (!result) {
                return res.status(404).json({
                    success: false,
                    message: "AiQuestionTemplate not found"
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
            const result = await aiQuestionTemplateService.update(data);
            if (!result) {
                return res.status(404).json({
                    success: false,
                    message: "AiQuestionTemplate not found"
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
            const result = await aiQuestionTemplateService.delete(id);
            if (!result) {
                return res.status(404).json({
                    success: false,
                    message: "AiQuestionTemplate not found"
                });
            }
            res.status(200).json({
                success: true,
                message: "AiQuestionTemplate deleted successfully"
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: error.message
            });
        }
    }
}; 