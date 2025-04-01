import {
    createTaiKhoanService, deleteTaiKhoanService,
    getAllTaiKhoanService,
    getTaiKhoanByIdService,
    updateTaiKhoanService
} from "../services/taiKhoanService.js";

export const createTaiKhoanController = async (req, res) => {
    const data = req.body;
    try {
        const team = await createTaiKhoanService(data);
        res.status(201).json(team);
    } catch (error) {
        res.status(500).json({message: 'Lỗi khi tạo bản ghi TaiKhoan: ' + error.message});
    }
};

export const getTaiKhoanByIdController = async (req, res) => {
    const { id } = req.params; 

    try {
        const team = await getTaiKhoanByIdService(id);
        res.status(200).json(team);
    } catch (error) {
        res.status(404).json({message: 'Bản ghi TaiKhoan không tồn tại: ' + error.message});
    }
};

export const getAllTaiKhoanController = async (req, res) => {
    try {
        const teamList = await getAllTaiKhoanService();
        res.status(200).json(teamList);
    } catch (error) {
        res.status(500).json({
            message: 'Lỗi khi lấy danh sách bản ghi TaiKhoan: ' + error.message,
        });
    }
};

export const updateTaiKhoanController = async (req, res) => {
    const data = req.body;
    try {
        const team = await updateTaiKhoanService(data);
        res.status(200).json(team);
    } catch (error) {
        res.status(404).json({
            message: 'Bản ghi không tồn tại hoặc lỗi khi cập nhật: ' + error.message,
        });
    }
};

export const deleteTaiKhoanController = async (req, res) => {
    let ids = req.params.id;
    if (!Array.isArray(ids)) {
        ids = [ids];
    }

    if (ids.length === 0) {
        return res.status(400).json({message: 'Yêu cầu không hợp lệ: cần một hoặc nhiều ID.'});
    }

    try {
        const result = await deleteTaiKhoanService(ids);
        res.status(200).json(result);
    } catch (error) {
        res.status(404).json({
            message: 'Bản ghi TaiKhoan không tồn tại hoặc lỗi khi xóa: ' + error.message,
        });
    }
};
