import {
    getAllDinhKhoanMapService,
    updateDinhKhoanMapService,
    createDinhKhoanMapService,
    deleteDinhKhoanMapService
} from "../services/dinhKhoanMapService.js";

// GET
export const getAllDinhKhoanMapController = async (req, res) => {
    try {
        const DinhKhoanMapList = await getAllDinhKhoanMapService();
        res.status(200).json(DinhKhoanMapList);
    } catch (error) {
        res.status(500).json({
            message: 'Lỗi khi lấy danh sách bản ghi DinhKhoanMap: ' + error.message,
        });
    }
};

// UPDATE
export const updateDinhKhoanMapController = async (req, res) => {
    const data = req.body;
    try {
        const updatedDinhKhoanMap = await updateDinhKhoanMapService(data);
        res.status(200).json(updatedDinhKhoanMap);
    } catch (error) {
        res.status(500).json({
            message: 'Lỗi khi cập nhật bản ghi DinhKhoanMap: ' + error.message,
        });
    }
};

// CREATE
export const createDinhKhoanMapController = async (req, res) => {
    const data = req.body;
    try {
        const createdDinhKhoanMap = await createDinhKhoanMapService(data);
        res.status(201).json(createdDinhKhoanMap);
    } catch (error) {
        res.status(500).json({
            message: 'Lỗi khi tạo bản ghi DinhKhoanMap: ' + error.message,
        });
    }
};

// DELETE
export const deleteDinhKhoanMapController = async (req, res) => {
    const {
        id
    } = req.params;
    try {
        const deletedDinhKhoanMap = await deleteDinhKhoanMapService(id);
        res.status(200).json(deletedDinhKhoanMap);
    } catch (error) {
        res.status(500).json({
            message: 'Lỗi khi xóa bản ghi DinhKhoanMap: ' + error.message,
        });
    }
};