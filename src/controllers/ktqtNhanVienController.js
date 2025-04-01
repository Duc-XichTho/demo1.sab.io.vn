import {
    createKtqtNhanVienService, deleteKtqtNhanVienService,
    getAllKtqtNhanVienService,
    getKtqtNhanVienByIdService,
    updateKtqtNhanVienService
} from "../services/ktqtNhanVienService.js";

export const createKtqtNhanVienController = async (req, res) => {
    const data = req.body;
    try {
        const team = await createKtqtNhanVienService(data);
        res.status(201).json(team);
    } catch (error) {
        res.status(500).json({message: 'Lỗi khi tạo bản ghi KtqtNhanVien: ' + error.message});
    }
};

export const getKtqtNhanVienByIdController = async (req, res) => {
    const { id } = req.params; 

    try {
        const team = await getKtqtNhanVienByIdService(id);
        res.status(200).json(team);
    } catch (error) {
        res.status(404).json({message: 'Bản ghi KtqtNhanVien không tồn tại: ' + error.message});
    }
};

export const getAllKtqtNhanVienController = async (req, res) => {
    try {
        const teamList = await getAllKtqtNhanVienService();
        res.status(200).json(teamList);
    } catch (error) {
        res.status(500).json({
            message: 'Lỗi khi lấy danh sách bản ghi KtqtNhanVien: ' + error.message,
        });
    }
};

export const updateKtqtNhanVienController = async (req, res) => {
    const data = req.body;
    try {
        const team = await updateKtqtNhanVienService(data);
        res.status(200).json(team);
    } catch (error) {
        res.status(404).json({
            message: 'Bản ghi không tồn tại hoặc lỗi khi cập nhật: ' + error.message,
        });
    }
};

export const deleteKtqtNhanVienController = async (req, res) => {
    let ids = req.params.id;
    if (!Array.isArray(ids)) {
        ids = [ids];
    }

    if (ids.length === 0) {
        return res.status(400).json({message: 'Yêu cầu không hợp lệ: cần một hoặc nhiều ID.'});
    }

    try {
        const result = await deleteKtqtNhanVienService(ids);
        res.status(200).json(result);
    } catch (error) {
        res.status(404).json({
            message: 'Bản ghi KtqtNhanVien không tồn tại hoặc lỗi khi xóa: ' + error.message,
        });
    }
};
