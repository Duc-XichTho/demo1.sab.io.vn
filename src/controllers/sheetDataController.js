import {
    getAllSheetDataBySheetIdService,
    updateSheetDataService,
    createSheetDataService,
    deleteSheetDataService
} from "../services/sheetDataService.js";

// GET
export const getAllSheetDataBySheetIdController = async (req, res) => {
    const { sheet_id } = req.params;
    try {
        const SheetDataList = await getAllSheetDataBySheetIdService(sheet_id);
        res.status(200).json(SheetDataList);
    } catch (error) {
        res.status(500).json({
            message: 'Lỗi khi lấy danh sách bản ghi SheetData: ' + error.message,
        });
    }
};

// UPDATE
export const updateSheetDataController = async (req, res) => {
    const data = req.body;
    try {
        const SheetData = await updateSheetDataService(data);
        res.status(200).json(SheetData);
    } catch (error) {
        res.status(404).json({
            message: 'Bản ghi SheetData không tồn tại hoặc lỗi khi cập nhật: ' + error.message,
        });
    }
};

// CREATE
export const createSheetDataController = async (req, res) => {
    const data = req.body;
    try {
        const SheetData = await createSheetDataService(data);
        res.status(201).json(SheetData);
    } catch (error) {
        res.status(500).json({
            message: 'Lỗi khi tạo bản ghi SheetData: ' + error.message,
        });
    }
};

// DELETE
export const deleteSheetDataController = async (req, res) => {
    let ids = req.params.id;
    if (!Array.isArray(ids)) {
        ids = [ids];
    }

    if (ids.length === 0) {
        return res.status(400).json({ message: 'Yêu cầu không hợp lệ: cần một hoặc nhiều ID.' });
    }

    try {
        const result = await deleteSheetDataService(ids);
        res.status(200).json(result);
    } catch (error) {
        res.status(404).json({
            message: 'Bản ghi SheetData không tồn tại hoặc lỗi khi xóa: ' + error.message,
        });
    }
};