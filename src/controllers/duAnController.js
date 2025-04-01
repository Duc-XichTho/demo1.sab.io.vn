import {
    createDuAnService,
    deleteDuAnService,
    getAllDuAnService,
    getDuAnByIdService,
    updateDuAnService
} from "../services/duAnService.js";

export const createDuAnController = async (req, res) => {
    const data = req.body;
    try {
        const team = await createDuAnService(data);
        res.status(201).json(team);
    } catch (error) {
        res.status(500).json({
            message: 'Lỗi khi tạo bản ghi DuAn: ' + error.message
        });
    }
};

export const getDuAnByIdController = async (req, res) => {
    const {
        id
    } = req.params;

    try {
        const team = await getDuAnByIdService(id);
        res.status(200).json(team);
    } catch (error) {
        res.status(404).json({
            message: 'Bản ghi DuAn không tồn tại: ' + error.message
        });
    }
};

export const getAllDuAnController = async (req, res) => {
    try {
        const teamList = await getAllDuAnService();
        res.status(200).json(teamList);
    } catch (error) {
        res.status(500).json({
            message: 'Lỗi khi lấy danh sách bản ghi DuAn: ' + error.message,
        });
    }
};

export const updateDuAnController = async (req, res) => {
    const data = req.body;
    try {
        const team = await updateDuAnService(data);
        res.status(200).json(team);
    } catch (error) {
        res.status(404).json({
            message: 'Bản ghi không tồn tại hoặc lỗi khi cập nhật: ' + error.message,
        });
    }
};

export const deleteDuAnController = async (req, res) => {
    let ids = req.params.id;
    if (!Array.isArray(ids)) {
        ids = [ids];
    }

    if (ids.length === 0) {
        return res.status(400).json({
            message: 'Yêu cầu không hợp lệ: cần một hoặc nhiều ID.'
        });
    }

    try {
        const result = await deleteDuAnService(ids);
        res.status(200).json(result);
    } catch (error) {
        res.status(404).json({
            message: 'Bản ghi DuAn không tồn tại hoặc lỗi khi xóa: ' + error.message,
        });
    }
};
