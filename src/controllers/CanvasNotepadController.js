import {
    getAllCanvasNotepad,
    getCanvasNotepadById,
    createCanvasNotepad,
    updateCanvasNotepad,
    deleteCanvasNotepad
} from "../services/CanvasNotepadService.js";

// GET
export const getCanvasNotepadByIdController = async (req, res) => {
    try {
        const {
            id
        } = req.params
        const data = await getCanvasNotepadById(id);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
}

export const getAllCanvasNotepadController = async (req, res) => {
    try {
        const data = await getAllCanvasNotepad();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
};

// CREATE
export const createCanvasNotepadController = async (req, res) => {
    const data = req.body;
    try {
        const newData = await createCanvasNotepad(data);
        res.status(200).json(newData);
    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
};

// UPDATE
export const updateCanvasNotepadController = async (req, res) => {
    const data = req.body;
    try {
        const updatedData = await updateCanvasNotepad(data);
        res.status(200).json(updatedData);
    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
};

// DELETE
export const deleteCanvasNotepadController = async (req, res) => {
    const {
        id
    } = req.params;
    try {
        await deleteCanvasNotepad(id);
        res.status(200).json({
            message: "Xóa bản ghi Canvas Notepad thành công"
        });
    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
};