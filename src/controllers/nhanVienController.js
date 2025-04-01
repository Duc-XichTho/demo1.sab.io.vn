import {
    createNhanVienService, deleteNhanVienService,
    getAllNhanVienService,
    getNhanVienByIdService,
    updateNhanVienService
} from "../services/nhanVienService.js";

export const createNhanVienController = async (req, res) => {
    const data = req.body;
    try {
        const team = await createNhanVienService(data);
        res.status(201).json(team);
    } catch (error) {
        res.status(500).json({message: 'Lỗi khi tạo bản ghi NhanVien: ' + error.message});
    }
};

export const getNhanVienByIdController = async (req, res) => {
    const { id } = req.params; 

    try {
        const team = await getNhanVienByIdService(id);
        res.status(200).json(team);
    } catch (error) {
        res.status(404).json({message: 'Bản ghi NhanVien không tồn tại: ' + error.message});
    }
};

export const getAllNhanVienController = async (req, res) => {
    try {
        const teamList = await getAllNhanVienService();
        res.status(200).json(teamList);
    } catch (error) {
        res.status(500).json({
            message: 'Lỗi khi lấy danh sách bản ghi NhanVien: ' + error.message,
        });
    }
};

export const updateNhanVienController = async (req, res) => {
    const data = req.body;
    try {
        const team = await updateNhanVienService(data);
        res.status(200).json(team);
    } catch (error) {
        res.status(404).json({
            message: 'Bản ghi không tồn tại hoặc lỗi khi cập nhật: ' + error.message,
        });
    }
};

export const deleteNhanVienController = async (req, res) => {
    let ids = req.params.id;
    if (!Array.isArray(ids)) {
        ids = [ids];
    }

    if (ids.length === 0) {
        return res.status(400).json({message: 'Yêu cầu không hợp lệ: cần một hoặc nhiều ID.'});
    }

    try {
        const result = await deleteNhanVienService(ids);
        res.status(200).json(result);
    } catch (error) {
        res.status(404).json({
            message: 'Bản ghi NhanVien không tồn tại hoặc lỗi khi xóa: ' + error.message,
        });
    }
};
