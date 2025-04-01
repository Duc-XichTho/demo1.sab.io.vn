import {
    getDinhKhoanByIdService,
    getAllDinhKhoanService,
    updateDinhKhoanService,
    createDinhKhoanService,
    deleteDinhKhoanService
} from "../services/dinhKhoanService.js";

// GET
export const getDinhKhoanByIdController = async (req, res) => {
    const { id } = req.params;
    try {
        const DinhKhoan = await getDinhKhoanByIdService(id);
        res.status(200).json(DinhKhoan);
    } catch (error) {
        res.status(404).json({ message: 'Bản ghi DinhKhoan không tồn tại: ' + error.message });
    }
};

export const getAllDinhKhoanController = async (req, res) => {
    try {
        const DinhKhoanList = await getAllDinhKhoanService();
        res.status(200).json(DinhKhoanList);
    } catch (error) {
        res.status(500).json({
            message: 'Lỗi khi lấy danh sách bản ghi DinhKhoan: ' + error.message,
        });
    }
};

// UPDATE
export const updateDinhKhoanController = async (req, res) => {
    const data = req.body;
    try {
        const DinhKhoan = await updateDinhKhoanService(data);
        res.status(200).json(DinhKhoan);
    } catch (error) {
        res.status(404).json({
            message: 'Bản ghi DinhKhoan không tồn tại hoặc lỗi khi cập nhật: ' + error.message,
        });
    }
};

// CREATE
export const createDinhKhoanController = async (req, res) => {
    const data = req.body;
    try {
        const DinhKhoan = await createDinhKhoanService(data);
        res.status(201).json(DinhKhoan);
    } catch (error) {
        res.status(500).json({ message: 'Lỗi khi tạo bản ghi DinhKhoan: ' + error.message });
    }
};

// DELETE
export const deleteDinhKhoanController = async (req, res) => {
    let ids = req.params.id;
    if (!Array.isArray(ids)) {
        ids = [ids];
    }

    if (ids.length === 0) {
        return res.status(400).json({ message: 'Yêu cầu không hợp lệ: cần một hoặc nhiều ID.' });
    }

    try {
        const result = await deleteDinhKhoanService(ids);
        res.status(200).json(result);
    } catch (error) {
        res.status(404).json({
            message: 'Bản ghi DinhKhoan không tồn tại hoặc lỗi khi xóa: ' + error.message,
        });
    }
};