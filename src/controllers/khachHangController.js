import {
    createKhachHangService, deleteKhachHangService,
    getAllKhachHangService,
    getKhachHangByIdService,
    updateKhachHangService
} from "../services/khachHangService.js";

export const createKhachHangController = async (req, res) => {
    const data = req.body;
    try {
        const team = await createKhachHangService(data);
        res.status(201).json(team);
    } catch (error) {
        res.status(500).json({message: 'Lỗi khi tạo bản ghi KhachHang: ' + error.message});
    }
};

export const getKhachHangByIdController = async (req, res) => {
    const { id } = req.params; 

    try {
        const team = await getKhachHangByIdService(id);
        res.status(200).json(team);
    } catch (error) {
        res.status(404).json({message: 'Bản ghi KhachHang không tồn tại: ' + error.message});
    }
};

export const getAllKhachHangController = async (req, res) => {
    try {
        const teamList = await getAllKhachHangService();
        res.status(200).json(teamList);
    } catch (error) {
        res.status(500).json({
            message: 'Lỗi khi lấy danh sách bản ghi KhachHang: ' + error.message,
        });
    }
};

export const updateKhachHangController = async (req, res) => {
    const data = req.body;
    try {
        const team = await updateKhachHangService(data);
        res.status(200).json(team);
    } catch (error) {
        res.status(404).json({
            message: 'Bản ghi không tồn tại hoặc lỗi khi cập nhật: ' + error.message,
        });
    }
};

export const deleteKhachHangController = async (req, res) => {
    let ids = req.params.id;
    if (!Array.isArray(ids)) {
        ids = [ids];
    }

    if (ids.length === 0) {
        return res.status(400).json({message: 'Yêu cầu không hợp lệ: cần một hoặc nhiều ID.'});
    }

    try {
        const result = await deleteKhachHangService(ids);
        res.status(200).json(result);
    } catch (error) {
        res.status(404).json({
            message: 'Bản ghi KhachHang không tồn tại hoặc lỗi khi xóa: ' + error.message,
        });
    }
};
