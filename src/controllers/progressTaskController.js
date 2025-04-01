import {
    getAllProgressTask,
    createProgressTask,
    updateProgressTask,
    deleteProgressTask
} from "../services/progressTaskService.js";

// GET
export const getAllProgressTaskController = async (req, res) => {
    const {
        stepId
    } = req.params;
    try {
        const data = await getAllProgressTask(stepId);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({
            message: 'Lỗi khi lấy danh sách bản ghi ProgressTask: ' + error.message
        });
    }
}

// CREATE
export const createProgressTaskController = async (req, res) => {
    const data = req.body;
    try {
        const newData = await createProgressTask(data);
        res.status(201).json(newData);
    } catch (error) {
        res.status(500).json({
            message: 'Lỗi khi tạo bản ghi ProgressTask: ' + error.message
        });
    }
};

// UPDATE
export const updateProgressTaskController = async (req, res) => {
    const {
        id
    } = req.params;
    try {
        const updatedData = await updateProgressTask(id, req.body);
        res.status(200).json(updatedData);
    } catch (error) {
        res.status(500).json({
            message: 'Lỗi khi cập nhật bản ghi ProgressTask: ' + error.message
        });
    }
};

// DELETE
export const deleteProgressTaskController = async (req, res) => {
    const {
        id
    } = req.params;
    try {
        const deletedData = await deleteProgressTask(id);
        res.status(200).json(deletedData);
    } catch (error) {
        res.status(500).json({
            message: 'Lỗi khi xóa bản ghi ProgressTask: ' + error.message
        });
    }
};