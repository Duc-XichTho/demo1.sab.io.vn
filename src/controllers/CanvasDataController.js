import {
    getAllCanvasData,
    createCanvasData,
    updateCanvasData,
    deleteCanvasData
} from "../services/CanvasDataService.js";

// GET
export const getAllCanvasDataController = async (req, res) => {
    try {
        const dataList = await getAllCanvasData();
        res.status(200).json(dataList);
    } catch (error) {
        res.status(500).json({
            message: 'Lỗi khi lấy danh sách bản ghi Canvas Data: ' + error.message
        });
    }
};

// CREATE
export const createCanvasDataController = async (req, res) => {
    const data = req.body;
    try {
        const newData = await createCanvasData(data);
        res.status(200).json(newData);
    } catch (error) {
        res.status(500).json({
            message: 'Lỗi khi tạo bản ghi Canvas Data: ' + error.message
        });
    }
};

// UPDATE
export const updateCanvasDataController = async (req, res) => {
    const data = req.body;
    try {
        const updatedData = await updateCanvasData(data);
        res.status(200).json(updatedData);
    } catch (error) {
        res.status(500).json({
            message: 'Lỗi khi cập nhật bản ghi Canvas Data: ' + error.message
        });
    }
};

// DELETE
export const deleteCanvasDataController = async (req, res) => {
    const {
        id
    } = req.params;
    try {
        const updatedData = await deleteCanvasData(id);
        res.status(200).json(updatedData);
    } catch (error) {
        res.status(500).json({
            message: 'Lỗi khi cập nhật bản ghi Canvas Data: ' + error.message
        });
    }
};