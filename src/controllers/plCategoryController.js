import {
    createPlCategoryService, deletePlCategoryService,
    getAllPlCategoryService,
    getPlCategoryByIdService,
    updatePlCategoryService
} from "../services/plCategoryService.js";

export const createPlCategoryController = async (req, res) => {
    const data = req.body;
    try {
        const team = await createPlCategoryService(data);
        res.status(201).json(team);
    } catch (error) {
        res.status(500).json({message: 'Lỗi khi tạo bản ghi PlCategory: ' + error.message});
    }
};

export const getPlCategoryByIdController = async (req, res) => {
    const { id } = req.params; 

    try {
        const team = await getPlCategoryByIdService(id);
        res.status(200).json(team);
    } catch (error) {
        res.status(404).json({message: 'Bản ghi PlCategory không tồn tại: ' + error.message});
    }
};

export const getAllPlCategoryController = async (req, res) => {
    try {
        const teamList = await getAllPlCategoryService();
        res.status(200).json(teamList);
    } catch (error) {
        res.status(500).json({
            message: 'Lỗi khi lấy danh sách bản ghi PlCategory: ' + error.message,
        });
    }
};

export const updatePlCategoryController = async (req, res) => {
    const data = req.body;
    try {
        const team = await updatePlCategoryService(data);
        res.status(200).json(team);
    } catch (error) {
        res.status(404).json({
            message: 'Bản ghi không tồn tại hoặc lỗi khi cập nhật: ' + error.message,
        });
    }
};

export const deletePlCategoryController = async (req, res) => {
    let ids = req.params.id;
    if (!Array.isArray(ids)) {
        ids = [ids];
    }

    if (ids.length === 0) {
        return res.status(400).json({message: 'Yêu cầu không hợp lệ: cần một hoặc nhiều ID.'});
    }

    try {
        const result = await deletePlCategoryService(ids);
        res.status(200).json(result);
    } catch (error) {
        res.status(404).json({
            message: 'Bản ghi PlCategory không tồn tại hoặc lỗi khi xóa: ' + error.message,
        });
    }
};
