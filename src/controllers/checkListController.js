import {
    getCheckListByIdService,
    getAllCheckListService,
    updateCheckListService,
    createCheckListService,
    deleteCheckListService
} from "../services/checkListService.js";

// GET
export const getCheckListByIdController = async (req, res) => {
    const { id } = req.params;
    try {
        const CheckList = await getCheckListByIdService(id);
        res.status(200).json(CheckList);
    } catch (error) {
        res.status(404).json({ message: 'Bản ghi CheckList không tồn tại: ' + error.message });
    }
};

export const getAllCheckListController = async (req, res) => {
    try {
        const CheckListList = await getAllCheckListService();
        res.status(200).json(CheckListList);
    } catch (error) {
        res.status(500).json({
            message: 'Lỗi khi lấy danh sách bản ghi CheckList: ' + error.message,
        });
    }
};

// UPDATE
export const updateCheckListController = async (req, res) => {
    const data = req.body;
    try {
        const CheckList = await updateCheckListService(data);
        res.status(200).json(CheckList);
    } catch (error) {
        res.status(404).json({
            message: 'Bản ghi CheckList không tồn tại hoặc lỗi khi cập nhật: ' + error.message,
        });
    }
};

// CREATE
export const createCheckListController = async (req, res) => {
    const data = req.body;
    try {
        const CheckList = await createCheckListService(data);
        res.status(201).json(CheckList);
    } catch (error) {
        res.status(500).json({ message: 'Lỗi khi tạo bản ghi CheckList: ' + error.message });
    }
};

// DELETE
export const deleteCheckListController = async (req, res) => {
    let ids = req.params.id;
    if (!Array.isArray(ids)) {
        ids = [ids];
    }

    if (ids.length === 0) {
        return res.status(400).json({ message: 'Yêu cầu không hợp lệ: cần một hoặc nhiều ID.' });
    }

    try {
        const result = await deleteCheckListService(ids);
        res.status(200).json(result);
    } catch (error) {
        res.status(404).json({
            message: 'Bản ghi CheckList không tồn tại hoặc lỗi khi xóa: ' + error.message,
        });
    }
};