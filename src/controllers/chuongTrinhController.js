import {
    createChuongTrinhService, deleteChuongTrinhService,
    getAllChuongTrinhService,
    getChuongTrinhByIdService,
    updateChuongTrinhService
} from "../services/chuongTrinhService.js";

export const createChuongTrinhController = async (req, res) => {
    const data = req.body;
    try {
        const team = await createChuongTrinhService(data);
        res.status(201).json(team);
    } catch (error) {
        res.status(500).json({message: 'Lỗi khi tạo bản ghi ChuongTrinh: ' + error.message});
    }
};

export const getChuongTrinhByIdController = async (req, res) => {
    const { id } = req.params; 

    try {
        const team = await getChuongTrinhByIdService(id);
        res.status(200).json(team);
    } catch (error) {
        res.status(404).json({message: 'Bản ghi ChuongTrinh không tồn tại: ' + error.message});
    }
};

export const getAllChuongTrinhController = async (req, res) => {
    try {
        const teamList = await getAllChuongTrinhService();
        res.status(200).json(teamList);
    } catch (error) {
        res.status(500).json({
            message: 'Lỗi khi lấy danh sách bản ghi ChuongTrinh: ' + error.message,
        });
    }
};

export const updateChuongTrinhController = async (req, res) => {
    const data = req.body;
    try {
        const team = await updateChuongTrinhService(data);
        res.status(200).json(team);
    } catch (error) {
        res.status(404).json({
            message: 'Bản ghi không tồn tại hoặc lỗi khi cập nhật: ' + error.message,
        });
    }
};

export const deleteChuongTrinhController = async (req, res) => {
    let ids = req.params.id;
    if (!Array.isArray(ids)) {
        ids = [ids];
    }

    if (ids.length === 0) {
        return res.status(400).json({message: 'Yêu cầu không hợp lệ: cần một hoặc nhiều ID.'});
    }

    try {
        const result = await deleteChuongTrinhService(ids);
        res.status(200).json(result);
    } catch (error) {
        res.status(404).json({
            message: 'Bản ghi ChuongTrinh không tồn tại hoặc lỗi khi xóa: ' + error.message,
        });
    }
};
