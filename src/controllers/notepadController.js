import {
    getNotePadByIdService,
    getAllNotepadService,
    updateNotepadService,
    createNotepadService,
    deleteNotepadService
} from "../services/notepadService.js";

// GET
export const getNotePadByIdController = async (req, res) => {
    const { id } = req.params;
    try {
        const notepad = await getNotePadByIdService(id);
        res.status(200).json(notepad);
    } catch (error) {
        res.status(404).json({ message: 'Bản ghi NotePad không tồn tại: ' + error.message });
    }
};

export const getAllNotepadController = async (req, res) => {
    try {
        const notepadList = await getAllNotepadService();
        res.status(200).json(notepadList);
    } catch (error) {
        res.status(500).json({
            message: 'Lỗi khi lấy danh sách bản ghi NotePad: ' + error.message,
        });
    }
};

// UPDATE
export const updateNotepadController = async (req, res) => {
    const data = req.body;
    try {
        const notepad = await updateNotepadService(data);
        res.status(200).json(notepad);
    } catch (error) {
        res.status(404).json({
            message: 'Bản ghi NotePad không tồn tại hoặc lỗi khi cập nhật: ' + error.message,
        });
    }
};

// CREATE
export const createNotepadController = async (req, res) => {
    const data = req.body;
    try {
        const notepad = await createNotepadService(data);
        res.status(201).json(notepad);
    } catch (error) {
        res.status(500).json({ message: 'Lỗi khi tạo bản ghi NotePad: ' + error.message });
    }
};

// DELETE
export const deleteNotepadController = async (req, res) => {
    let ids = req.params.id;
    if (!Array.isArray(ids)) {
        ids = [ids];
    }

    if (ids.length === 0) {
        return res.status(400).json({ message: 'Yêu cầu không hợp lệ: cần một hoặc nhiều ID.' });
    }

    try {
        const result = await deleteNotepadService(ids);
        res.status(200).json(result);
    } catch (error) {
        res.status(404).json({
            message: 'Bản ghi Notepad không tồn tại hoặc lỗi khi xóa: ' + error.message,
        });
    }
};