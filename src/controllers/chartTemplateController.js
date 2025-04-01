import {
    createChartTemplateService, deleteChartTemplateService,
    getAllChartTemplateService,
    getChartTemplateByIdService,
    updateChartTemplateService
} from "../services/chartTemplateService.js";

export const createChartTemplateController = async (req, res) => {
    const data = req.body;
    try {
        const team = await createChartTemplateService(data);
        res.status(201).json(team);
    } catch (error) {
        res.status(500).json({message: 'Lỗi khi tạo bản ghi ChartTemplate: ' + error.message});
    }
};

export const getChartTemplateByIdController = async (req, res) => {
    const { id } = req.params; 

    try {
        const team = await getChartTemplateByIdService(id);
        res.status(200).json(team);
    } catch (error) {
        res.status(404).json({message: 'Bản ghi ChartTemplate không tồn tại: ' + error.message});
    }
};

export const getAllChartTemplateController = async (req, res) => {
    try {
        const teamList = await getAllChartTemplateService();
        res.status(200).json(teamList);
    } catch (error) {
        res.status(500).json({
            message: 'Lỗi khi lấy danh sách bản ghi ChartTemplate: ' + error.message,
        });
    }
};

export const updateChartTemplateController = async (req, res) => {
    const data = req.body;
    try {
        const team = await updateChartTemplateService(data);
        res.status(200).json(team);
    } catch (error) {
        res.status(404).json({
            message: 'Bản ghi không tồn tại hoặc lỗi khi cập nhật: ' + error.message,
        });
    }
};

export const deleteChartTemplateController = async (req, res) => {
    let ids = req.params.id;
    if (!Array.isArray(ids)) {
        ids = [ids];
    }

    if (ids.length === 0) {
        return res.status(400).json({message: 'Yêu cầu không hợp lệ: cần một hoặc nhiều ID.'});
    }

    try {
        const result = await deleteChartTemplateService(ids);
        res.status(200).json(result);
    } catch (error) {
        res.status(404).json({
            message: 'Bản ghi ChartTemplate không tồn tại hoặc lỗi khi xóa: ' + error.message,
        });
    }
};
