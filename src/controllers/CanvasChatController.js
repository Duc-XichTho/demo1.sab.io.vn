import {
    getAllCanvasChat,
    createCanvasChat,
    updateCanvasChat,
    deleteCanvasChat, getAllCanvasChatByCanvasContainer, getAllCanvasChatByKHKDId
} from "../services/CanvasChatService.js";

// GET
export const getAllCanvasChatController = async (req, res) => {
    try {
        const dataList = await getAllCanvasChat();
        res.status(200).json(dataList);
    } catch (error) {
        res.status(500).json({
            message: 'Lỗi khi lấy danh sách bản ghi Canvas Chat: ' + error.message
        });
    }
};
export const getAllCanvasChatByCanvasContainerController = async (req, res) => {

    try {
        const  id  = req.params.id;
        const dataList = await getAllCanvasChatByCanvasContainer(id);
        res.status(200).json(dataList);
    } catch (error) {
        res.status(500).json({
            message: 'Lỗi khi lấy danh sách bản ghi Canvas Chat: ' + error.message
        });
    }
};

export const getAllCanvasChatByKHKDIdController = async (req, res) => {

    try {
        const  id  = req.params.id;
        const dataList = await getAllCanvasChatByKHKDId(id);
        res.status(200).json(dataList);
    } catch (error) {
        res.status(500).json({
            message: 'Lỗi khi lấy danh sách bản ghi Canvas Chat: ' + error.message
        });
    }
};

// CREATE
export const createCanvasChatController = async (req, res) => {
    const data = req.body;
    try {
        const newData = await createCanvasChat(data);
        res.status(200).json(newData);
    } catch (error) {
        res.status(500).json({
            message: 'Lỗi khi tạo bản ghi Canvas Chat: ' + error.message
        });
    }
};

// UPDATE
export const updateCanvasChatController = async (req, res) => {
    const data = req.body;
    try {
        const updatedData = await updateCanvasChat(data);
        res.status(200).json(updatedData);
    } catch (error) {
        res.status(500).json({
            message: 'Lỗi khi cập nhật bản ghi Canvas Chat: ' + error.message
        });
    }
};

// DELETE
export const deleteCanvasChatController = async (req, res) => {
    const {
        id
    } = req.params;
    try {
        const deletedData = await deleteCanvasChat(id);
        res.status(200).json(deletedData);
    } catch (error) {
        res.status(500).json({
            message: 'Lỗi khi xóa bản ghi Canvas Chat: ' + error.message
        });
    }
};
