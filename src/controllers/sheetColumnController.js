import {
    getAllSheetColumnBySheetIdService,
    getColumnDataByIdService,
    getColumnDataByCloneIdService,
    updateSheetColumnService,
    createSheetColumnService,
    deleteSheetColumnService
} from "../services/sheetColumnService.js";

// GET
export const getAllSheetColumnBySheetIdController = async (req, res) => {
    const { sheet_id } = req.params;
    try {
        const SheetColumnList = await getAllSheetColumnBySheetIdService(sheet_id);
        res.status(200).json(SheetColumnList);
    } catch (error) {
        res.status(500).json({
            message: 'Lỗi khi lấy danh sách bản ghi SheetColumn: ' + error.message,
        });
    }
};

export const getColumnDataByIdController = async (req, res) => {
    const { id } = req.params;
    try {
        const SheetColumn = await getColumnDataByIdService(id);
        res.status(200).json(SheetColumn);
    } catch (error) {
        res.status(404).json({
            message: 'Bản ghi SheetColumn không tồn tại hoặc lỗi khi lấy bản ghi: ' + error.message,
        });
    }
};

export const getColumnDataByCloneIdController = async (req, res) => {
    const { id } = req.params;
    try {
        const SheetColumn = await getColumnDataByCloneIdService(id);
        res.status(200).json(SheetColumn);
    } catch (error) {
        res.status(404).json({
            message: 'Bản ghi SheetColumn không tồn tại hoặc lỗi khi lấy bản ghi: ' + error.message,
        });
    }
};
// UPDATE
export const updateSheetColumnController = async (req, res) => {
    const data = req.body;
    try {
        const SheetColumn = await updateSheetColumnService(data);
        res.status(200).json(SheetColumn);
    } catch (error) {
        res.status(404).json({
            message: 'Bản ghi SheetColumn không tồn tại hoặc lỗi khi cập nhật: ' + error.message,
        });
    }
};

// CREATE
export const createSheetColumnController = async (req, res) => {
    const data = req.body;
    try {
        const SheetColumn = await createSheetColumnService(data);
        res.status(201).json(SheetColumn);
    } catch (error) {
        res.status(500).json({
            message: 'Lỗi khi tạo bản ghi SheetColumn: ' + error.message,
        });
    }
};

// DELETE
export const deleteSheetColumnController = async (req, res) => {
    let ids = req.params.id;
    if (!Array.isArray(ids)) {
        ids = [ids];
    }

    if (ids.length === 0) {
        return res.status(400).json({ message: 'Yêu cầu không hợp lệ: cần một hoặc nhiều ID.' });
    }

    try {
        const result = await deleteSheetColumnService(ids);
        res.status(200).json(result);
    } catch (error) {
        res.status(404).json({
            message: 'Bản ghi SheetColumn không tồn tại hoặc lỗi khi xóa: ' + error.message,
        });
    }
};