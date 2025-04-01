import {
    getAllProgressTaskPost,
    createProgressTaskPost,
    updateProgressTaskPost,
    deleteProgressTaskPost
} from "../services/progressTaskPostService.js";

// GET
export const getAllProgressTaskPostController = async (req, res) => {
    const {
        progressTaskId
    } = req.params;
    try {
        const data = await getAllProgressTaskPost(progressTaskId);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({
            message: 'Lỗi khi lấy danh sách bản ghi ProgressTaskPost: ' + error.message
        });
    }
}

// CREATE
export const createProgressTaskPostController = async (req, res) => {
    const data = req.body;
    try {
        const newData = await createProgressTaskPost(data);
        res.status(200).json(newData);
    } catch (error) {
        res.status(500).json({
            message: 'Lỗi khi tạo bản ghi ProgressTaskPost: ' + error.message
        });
    }
};

// UPDATE
export const updateProgressTaskPostController = async (req, res) => {
    const {
        id
    } = req.body;
    try {
        const updatedData = await updateProgressTaskPost(id, req.body);
        res.status(200).json(updatedData);
    } catch (error) {
        res.status(500).json({
            message: 'Lỗi khi cập nhật bản ghi ProgressTaskPost: ' + error.message
        });
    }
};

// DELETE
export const deleteProgressTaskPostController = async (req, res) => {
    const {
        id
    } = req.params;
    try {
        await deleteProgressTaskPost(id);
        res.status(200).json({
            message: 'Xóa bản ghi ProgressTaskPost thành công'
        });
    } catch (error) {
        res.status(500).json({
            message: 'Lỗi khi xóa bản ghi ProgressTaskPost: ' + error.message
        });
    }
};