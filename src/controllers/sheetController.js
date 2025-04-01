import {
    getSheetByIdService,
    getAllSheetService,
    updateSheetService,
    createSheetService,
    deleteSheetService
} from "../services/sheetService.js";

// GET
export const getSheetByIdController = async (req, res) => {
    const { id } = req.params;
    try {
        const Sheet = await getSheetByIdService(id);
        res.status(200).json(Sheet);
    } catch (error) {
        res.status(404).json({ message: 'Bản ghi Sheet không tồn tại: ' + error.message });
    }
};

export const getAllSheetController = async (req, res) => {
    try {
        const SheetList = await getAllSheetService();
        res.status(200).json(SheetList);
    } catch (error) {
        res.status(500).json({
            message: 'Lỗi khi lấy danh sách bản ghi Sheet: ' + error.message,
        });
    }
};

// UPDATE
export const updateSheetController = async (req, res) => {
    const data = req.body;
    try {
        const Sheet = await updateSheetService(data);
        res.status(200).json(Sheet);
    } catch (error) {
        res.status(404).json({
            message: 'Bản ghi Sheet không tồn tại hoặc lỗi khi cập nhật: ' + error.message,
        });
    }
};

// CREATE
export const createSheetController = async (req, res) => {
    const data = req.body;
    try {
        const Sheet = await createSheetService(data);
        res.status(201).json(Sheet);
    } catch (error) {
        res.status(500).json({ message: 'Lỗi khi tạo bản ghi Sheet: ' + error.message });
    }
};

// DELETE
export const deleteSheetController = async (req, res) => {
    let ids = req.params.id;
    if (!Array.isArray(ids)) {
        ids = [ids];
    }

    if (ids.length === 0) {
        return res.status(400).json({ message: 'Yêu cầu không hợp lệ: cần một hoặc nhiều ID.' });
    }

    try {
        const result = await deleteSheetService(ids);
        res.status(200).json(result);
    } catch (error) {
        res.status(404).json({
            message: 'Bản ghi Sheet không tồn tại hoặc lỗi khi xóa: ' + error.message,
        });
    }
};