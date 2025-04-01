import {
    getAllProgressStep,
    createProgressStep,
    updateProgressStep,
    deleteProgressStep
} from "../services/progressStepService.js";

// GET
export const getAllProgressStepController = async (req, res) => {
    const {
        progressId
    } = req.params;
    try {
        const data = await getAllProgressStep(progressId);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({
            message: 'Lỗi khi lấy danh sách bản ghi ProgressStep: ' + error.message
        });
    }
};

// CREATE
export const createProgressStepController = async (req, res) => {
    const data = req.body;
    try {
        const newData = await createProgressStep(data);
        res.status(201).json(newData);
    } catch (error) {
        res.status(500).json({
            message: 'Lỗi khi tạo bản ghi ProgressStep: ' + error.message
        });
    }
};

// UPDATE
export const updateProgressStepController = async (req, res) => {
    const {
        id
    } = req.params;
    try {
        const updatedData = await updateProgressStep(id, req.body);
        res.status(200).json(updatedData);
    } catch (error) {
        res.status(500).json({
            message: 'Lỗi khi cập nhật bản ghi ProgressStep: ' + error.message
        });
    }
};

// DELETE
export const deleteProgressStepController = async (req, res) => {
    const {
        id
    } = req.params;
    try {
        await deleteProgressStep(id);
        res.status(200).json({
            message: 'Xóa bản ghi ProgressStep thành công'
        });
    } catch (error) {
        res.status(500).json({
            message: 'Lỗi khi xóa bản ghi ProgressStep: ' + error.message
        });
    }
};