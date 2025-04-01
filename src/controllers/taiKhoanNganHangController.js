import {
    createTaiKhoanNganHangService,
    getAllTaiKhoanNganHangService,
    getTaiKhoanNganHangByIdService,
    updateTaiKhoanNganHangService,
    deleteTaiKhoanNganHangService
} from '../services/taiKhoanNganHangService2.js'

export const createTaiKhoanNganHangController = async (req, res) => {
    const data = req.body;
    try {
        const team = await createTaiKhoanNganHangService(data);
        res.status(201).json(team);
    } catch (error) {
        res.status(500).json({message: 'Lỗi khi tạo bản ghi TaiKhoanNganHang: ' + error.message});
    }
};

export const getTaiKhoanNganHangByIdController = async (req, res) => {
    const { id } = req.params; 

    try {
        const team = await getTaiKhoanNganHangByIdService(id);
        res.status(200).json(team);
    } catch (error) {
        res.status(404).json({message: 'Bản ghi TaiKhoanNganHang không tồn tại: ' + error.message});
    }
};

export const getAllTaiKhoanNganHangController = async (req, res) => {
    try {
        const teamList = await getAllTaiKhoanNganHangService();
        res.status(200).json(teamList);
    } catch (error) {
        res.status(500).json({
            message: 'Lỗi khi lấy danh sách bản ghi TaiKhoanNganHang: ' + error.message,
        });
    }
};

export const updateTaiKhoanNganHangController = async (req, res) => {
    const data = req.body;
    try {
        const team = await updateTaiKhoanNganHangService(data);
        res.status(200).json(team);
    } catch (error) {
        res.status(404).json({
            message: 'Bản ghi không tồn tại hoặc lỗi khi cập nhật: ' + error.message,
        });
    }
};

export const deleteTaiKhoanNganHangController = async (req, res) => {
    let ids = req.params.id;
    if (!Array.isArray(ids)) {
        ids = [ids];
    }

    if (ids.length === 0) {
        return res.status(400).json({message: 'Yêu cầu không hợp lệ: cần một hoặc nhiều ID.'});
    }

    try {
        const result = await deleteTaiKhoanNganHangService(ids);
        res.status(200).json(result);
    } catch (error) {
        res.status(404).json({
            message: 'Bản ghi TaiKhoanNganHang không tồn tại hoặc lỗi khi xóa: ' + error.message,
        });
    }
};
