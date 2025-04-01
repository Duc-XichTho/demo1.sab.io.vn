import {
    getAllProgressService,
    createProgressService,
    updateProgressService,
    deleteProgressService
} from "../services/progressService.js";

// GET
export const getAllProgressController = async (req, res) => {
    try {
        const data = await getAllProgressService();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({
            message: 'Lỗi khi lấy danh sách bản ghi Progress: ' + error.message,
        });
    }
};

// CREATE
export const createProgressController = async (req, res) => {
    const data = req.body;
    try {
        const newData = await createProgressService(data);
        res.status(201).json(newData);
    } catch (error) {
        res.status(500).json({
            message: 'Lỗi khi tạo bản ghi Progress: ' + error.message,
        });
    }
};

// UPDATE
export const updateProgressController = async (req, res) => {
    const data = req.body;
    try {
        const updatedData = await updateProgressService(data);
        res.status(200).json(updatedData);
    } catch (error) {
        res.status(500).json({
            message: 'Lỗi khi cập nhật bản ghi Progress: ' + error.message,
        });
    }
};

// DELETE
export const deleteProgressController = async (req, res) => {
    const {
        id
    } = req.params;
    try {
        await deleteProgressService(id);
        res.status(200).json({
            message: 'Bản ghi Progress đã được xóa thành công',
        });
    } catch (error) {
        res.status(500).json({
            message: 'Lỗi khi xóa bản ghi Progress: ' + error.message,
        });
    }
};