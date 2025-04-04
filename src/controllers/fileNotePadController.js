import {
    createFileNotePadService,
    getFileNotePadByIdService,
    getFileNotePadService,
    updateFileNotePadService,
    deleteFileNotePadService,
} from '../services/fileNotePadService.js';

export const createFileNotePadController = async (req, res) => {
    const data = req.body;
    try {
        const FileNotePad = await createFileNotePadService(data);
        res.status(201).json(FileNotePad);
    } catch (error) {
        res.status(500).json({
            message: 'Lỗi khi tạo bản ghi FileNotePad: ' + error.message
        });
    }
};

export const getFileNotePadByIdController = async (req, res) => {
    const {
        id
    } = req.params;
    try {
        const FileNotePad = await getFileNotePadByIdService(id);
        res.status(200).json(FileNotePad);
    } catch (error) {
        res.status(404).json({
            message: 'Bản ghi FileNotePad không tồn tại: ' + error.message
        });
    }
};

export const getFileNotePadByIdControllerPublic = async (req, res) => {
    const { id } = req.params;
    try {
        const fileNotePad = await getFileNotePadByIdService(id);
        const data = {
            id: fileNotePad.id || '',
            url: fileNotePad.url || '',
        }
        res.status(200).json(data);
    } catch (error) {
        res.status(404).json({
            message: 'Bản ghi FileNotePad không tồn tại: ' + error.message
        });
    }
};

export const getFileNotePadController = async (req, res) => {
    try {
        const FileNotePadList = await getFileNotePadService();
        res.status(200).json(FileNotePadList);
    } catch (error) {
        res.status(500).json({
            message: 'Lỗi khi lấy danh sách bản ghi FileNotePad: ' + error.message,
        });
    }
};

export const updateFileNotePadController = async (req, res) => {
    const data = req.body;
    try {
        const FileNotePad = await updateFileNotePadService(data);
        res.status(200).json(FileNotePad);
    } catch (error) {
        res.status(404).json({
            message: 'Bản ghi FileNotePad không tồn tại hoặc lỗi khi cập nhật: ' + error.message,
        });
    }
};

export const deleteFileNotePadController = async (req, res) => {
    let id = req.params.id;
    try {
        const result = await deleteFileNotePadService(id);
        res.status(200).json(result);
    } catch (error) {
        res.status(404).json({
            message: 'Bản ghi FileNotePad không tồn tại hoặc lỗi khi xóa: ' + error.message,
        });
    }
};