import {
    createTemplateService, deleteTemplateService,
    getAllTemplateService,
    getTemplateByIdService,
    updateTemplateService
} from "../services/templateService.js";

export const createTemplateController = async (req, res) => {
    const data = req.body;
    try {
        const team = await createTemplateService(data);
        res.status(201).json(team);
    } catch (error) {
        res.status(500).json({message: 'Lỗi khi tạo bản ghi Template: ' + error.message});
    }
};

export const getTemplateByIdController = async (req, res) => {
    const { id } = req.params; 

    try {
        const team = await getTemplateByIdService(id);
        res.status(200).json(team);
    } catch (error) {
        res.status(404).json({message: 'Bản ghi Template không tồn tại: ' + error.message});
    }
};

export const getAllTemplateController = async (req, res) => {
    try {
        const teamList = await getAllTemplateService();
        res.status(200).json(teamList);
    } catch (error) {
        res.status(500).json({
            message: 'Lỗi khi lấy danh sách bản ghi Template: ' + error.message,
        });
    }
};

export const updateTemplateController = async (req, res) => {
    const data = req.body;
    try {
        const team = await updateTemplateService(data);
        res.status(200).json(team);
    } catch (error) {
        res.status(404).json({
            message: 'Bản ghi không tồn tại hoặc lỗi khi cập nhật: ' + error.message,
        });
    }
};

export const deleteTemplateController = async (req, res) => {
    let ids = req.params.id;
    if (!Array.isArray(ids)) {
        ids = [ids];
    }

    if (ids.length === 0) {
        return res.status(400).json({message: 'Yêu cầu không hợp lệ: cần một hoặc nhiều ID.'});
    }

    try {
        const result = await deleteTemplateService(ids);
        res.status(200).json(result);
    } catch (error) {
        res.status(404).json({
            message: 'Bản ghi Template không tồn tại hoặc lỗi khi xóa: ' + error.message,
        });
    }
};
