import { templateSettingAIReportBuilderService } from "../services/templateSettingAIReportBuilderService.js";

export const templateSettingAIReportBuilderController = {
    async create(req, res) {
        try {
            const data = req.body;
            const result = await templateSettingAIReportBuilderService.create(data);
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
            const result = await templateSettingAIReportBuilderService.findAll();
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
            const result = await templateSettingAIReportBuilderService.findById(id);
            if (!result) {
                return res.status(404).json({
                    success: false,
                    message: "TemplateSettingAIReportBuilder not found"
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
            const result = await templateSettingAIReportBuilderService.update(data);
            if (!result) {
                return res.status(404).json({
                    success: false,
                    message: "TemplateSettingAIReportBuilder not found"
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
            const result = await templateSettingAIReportBuilderService.delete(id);
            if (!result) {
                return res.status(404).json({
                    success: false,
                    message: "TemplateSettingAIReportBuilder not found"
                });
            }
            res.status(200).json({
                success: true,
                message: "TemplateSettingAIReportBuilder deleted successfully"
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: error.message
            });
        }
    }
}; 