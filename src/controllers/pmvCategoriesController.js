import {
    createPMVCategoriesService, deletePMVCategoriesService,
    getAllPMVCategoriesService,
    getPMVCategoriesByIdService,
    updatePMVCategoriesService
} from "../services/pmvCategoriesService.js";

export const createPMVCategoriesController = async (req, res) => {
    const data = req.body;
    try {
        const team = await createPMVCategoriesService(data);
        res.status(201).json(team);
    } catch (error) {
        res.status(500).json({message: 'Lỗi khi tạo bản ghi PMVCategories: ' + error.message});
    }
};

export const getPMVCategoriesByIdController = async (req, res) => {
    const { id } = req.params; 

    try {
        const team = await getPMVCategoriesByIdService(id);
        res.status(200).json(team);
    } catch (error) {
        res.status(404).json({message: 'Bản ghi PMVCategories không tồn tại: ' + error.message});
    }
};

export const getAllPMVCategoriesController = async (req, res) => {
    try {
        const teamList = await getAllPMVCategoriesService();
        res.status(200).json(teamList);
    } catch (error) {
        res.status(500).json({
            message: 'Lỗi khi lấy danh sách bản ghi PMVCategories: ' + error.message,
        });
    }
};

export const updatePMVCategoriesController = async (req, res) => {
    const data = req.body;
    try {
        const team = await updatePMVCategoriesService(data);
        res.status(200).json(team);
    } catch (error) {
        res.status(404).json({
            message: 'Bản ghi không tồn tại hoặc lỗi khi cập nhật: ' + error.message,
        });
    }
};

export const deletePMVCategoriesController = async (req, res) => {
    let ids = req.params.id;
    if (!Array.isArray(ids)) {
        ids = [ids];
    }

    if (ids.length === 0) {
        return res.status(400).json({message: 'Yêu cầu không hợp lệ: cần một hoặc nhiều ID.'});
    }

    try {
        const result = await deletePMVCategoriesService(ids);
        res.status(200).json(result);
    } catch (error) {
        res.status(404).json({
            message: 'Bản ghi PMVCategories không tồn tại hoặc lỗi khi xóa: ' + error.message,
        });
    }
};
