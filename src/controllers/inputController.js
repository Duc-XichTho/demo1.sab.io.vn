import {
    createInputService, deleteInputService, findLastIdInputService, findLastUpdateInputService,
    getAllInputService,
    getInputByIdService,
    updateInputService
} from '../services/inputService.js';

export const createInputController = async (req, res) => {
    const data = req.body;
    try {
        const team = await createInputService(data);
        res.status(201).json(team);
    } catch (error) {
        res.status(500).json({ message: 'Lỗi khi tạo bản ghi Input: ' + error.message });
    }
};

export const getInputByIdController = async (req, res) => {
    const { id } = req.params;

    try {
        const team = await getInputByIdService(id);
        res.status(200).json(team);
    } catch (error) {
        res.status(404).json({ message: 'Bản ghi Input không tồn tại: ' + error.message });
    }
};

export const getAllInputController = async (req, res) => {
    try {
        const teamList = await getAllInputService();
        res.status(200).json(teamList);
    } catch (error) {
        res.status(500).json({
            message: 'Lỗi khi lấy danh sách bản ghi Input: ' + error.message,
        });
    }
};

export const updateInputController = async (req, res) => {
    const data = req.body;
    try {
        const team = await updateInputService(data);
        res.status(200).json(team);
    } catch (error) {
        res.status(404).json({
            message: 'Bản ghi không tồn tại hoặc lỗi khi cập nhật: ' + error.message,
        });
    }
};

export const deleteInputController = async (req, res) => {
    let ids = req.params.id;
    if (!Array.isArray(ids)) {
        ids = [ids];
    }

    if (ids.length === 0) {
        return res.status(400).json({ message: 'Yêu cầu không hợp lệ: cần một hoặc nhiều ID.' });
    }

    try {
        const result = await deleteInputService(ids);
        res.status(200).json(result);
    } catch (error) {
        res.status(404).json({
            message: 'Bản ghi Input không tồn tại hoặc lỗi khi xóa: ' + error.message,
        });
    }
};


export const getLastUpdateInputController = async (req, res) => {
    try {
        const lastUpdate = await findLastUpdateInputService();
        res.status(200).json(lastUpdate);
    } catch (error) {
        res.status(500).json({
            message: 'Lỗi khi lấy danh sách bản ghi SoKeToan: ' + error.message,
        });
    }
};
export const getLastIdInputController = async (req, res) => {
    try {
        const lastUpdate = await findLastIdInputService();
        res.status(200).json(lastUpdate);
    } catch (error) {
        res.status(500).json({
            message: 'Lỗi khi lấy danh sách bản ghi SoKeToan: ' + error.message,
        });
    }
};
