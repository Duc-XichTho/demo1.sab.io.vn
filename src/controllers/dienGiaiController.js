import {
    createDienGiaiService, deleteDienGiaiService,
    getAllDienGiaiService,
    getDienGiaiByIdService, getDienGiaiByNameService,
    updateDienGiaiService
} from "../services/dienGiaiService.js";

export const createDienGiaiController = async (req, res) => {
    const data = req.body;
    try {
        const team = await createDienGiaiService(data);
        res.status(201).json(team);
    } catch (error) {
        res.status(500).json({message: 'Lỗi khi tạo bản ghi DienGiai: ' + error.message});
    }
};

export const getDienGiaiByIdController = async (req, res) => {
    const { id } = req.params; 

    try {
        const team = await getDienGiaiByIdService(id);
        res.status(200).json(team);
    } catch (error) {
        res.status(404).json({message: 'Bản ghi DienGiai không tồn tại: ' + error.message});
    }
};

export const getDienGiaiByNameController = async (req, res) => {
    const { name } = req.params;

    try {
        const team = await getDienGiaiByNameService(name);
        res.status(200).json(team);
    } catch (error) {
        res.status(404).json({message: 'Bản ghi DienGiai không tồn tại: ' + error.message});
    }
};

export const getAllDienGiaiController = async (req, res) => {
    try {
        const teamList = await getAllDienGiaiService();
        res.status(200).json(teamList);
    } catch (error) {
        res.status(500).json({
            message: 'Lỗi khi lấy danh sách bản ghi DienGiai: ' + error.message,
        });
    }
};

export const updateDienGiaiController = async (req, res) => {
    const data = req.body;
    try {
        const team = await updateDienGiaiService(data);
        res.status(200).json(team);
    } catch (error) {
        res.status(404).json({
            message: 'Bản ghi không tồn tại hoặc lỗi khi cập nhật: ' + error.message,
        });
    }
};

export const deleteDienGiaiController = async (req, res) => {
    let ids = req.params.id;
    if (!Array.isArray(ids)) {
        ids = [ids];
    }

    if (ids.length === 0) {
        return res.status(400).json({message: 'Yêu cầu không hợp lệ: cần một hoặc nhiều ID.'});
    }

    try {
        const result = await deleteDienGiaiService(ids);
        res.status(200).json(result);
    } catch (error) {
        res.status(404).json({
            message: 'Bản ghi DienGiai không tồn tại hoặc lỗi khi xóa: ' + error.message,
        });
    }
};
