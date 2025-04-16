import {
    getAllCanvasBot,
    createCanvasBot,
    updateCanvasBot,
    deleteCanvasBot, getCanvasBotByIdCanvasContainer
} from "../services/CanvasBotService.js";

// GET
export const getAllCanvasBotController = async (req, res) => {
    try {
        const dataList = await getAllCanvasBot();
        res.status(200).json(dataList);
    } catch (error) {
        res.status(500).json({
            message: 'Lỗi khi lấy danh sách bản ghi Canvas Bot: ' + error.message
        });
    }
};

export const getCanvasBotByIdCanvasContainerController = async (req, res) => {
    try {
        const id = req.params.id;
        const dataList = await getCanvasBotByIdCanvasContainer(id);
        res.status(200).json(dataList);
    } catch (error) {
        res.status(500).json({
            message: 'Lỗi khi lấy danh sách bản ghi Canvas Bot: ' + error.message
        });
    }
};

// CREATE
export const createCanvasBotController = async (req, res) => {
    const data = req.body;
    try {
        const newData = await createCanvasBot(data);
        res.status(200).json(newData);
    } catch (error) {
        res.status(500).json({
            message: 'Lỗi khi tạo bản ghi Canvas Bot: ' + error.message
        });
    }
};

// UPDATE
export const updateCanvasBotController = async (req, res) => {
    const data = req.body;
    try {
        const updatedData = await updateCanvasBot(data);
        res.status(200).json(updatedData);
    } catch (error) {
        res.status(500).json({
            message: 'Lỗi khi cập nhật bản ghi Canvas Bot: ' + error.message
        });
    }
};

// DELETE
export const deleteCanvasBotController = async (req, res) => {
    const {
        id
    } = req.params;
    try {
        const updatedData = await deleteCanvasBot(id);
        res.status(200).json(updatedData);
    } catch (error) {
        res.status(500).json({
            message: 'Lỗi khi cập nhật bản ghi Canvas Bot: ' + error.message
        });
    }
};