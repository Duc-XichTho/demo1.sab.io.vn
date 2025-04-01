import {
    createLoService, deleteLoService,
    getAllLoService,
    getLoByIdService,
    updateLoService
} from "../services/loService.js";

export const createLoController = async (req, res) => {
    const data = req.body;
    try {
        const team = await createLoService(data);
        res.status(201).json(team);
    } catch (error) {
        res.status(500).json({message: 'Lỗi khi tạo bản ghi Lo: ' + error.message});
    }
};

export const getLoByIdController = async (req, res) => {
    const { id } = req.params; 

    try {
        const team = await getLoByIdService(id);
        res.status(200).json(team);
    } catch (error) {
        res.status(404).json({message: 'Bản ghi Lo không tồn tại: ' + error.message});
    }
};

export const getAllLoController = async (req, res) => {
    try {
        const teamList = await getAllLoService();
        res.status(200).json(teamList);
    } catch (error) {
        res.status(500).json({
            message: 'Lỗi khi lấy danh sách bản ghi Lo: ' + error.message,
        });
    }
};

export const updateLoController = async (req, res) => {
    const data = req.body;
    try {
        const team = await updateLoService(data);
        res.status(200).json(team);
    } catch (error) {
        res.status(404).json({
            message: 'Bản ghi không tồn tại hoặc lỗi khi cập nhật: ' + error.message,
        });
    }
};

export const deleteLoController = async (req, res) => {
    let ids = req.params.id;
    if (!Array.isArray(ids)) {
        ids = [ids];
    }

    if (ids.length === 0) {
        return res.status(400).json({message: 'Yêu cầu không hợp lệ: cần một hoặc nhiều ID.'});
    }

    try {
        const result = await deleteLoService(ids);
        res.status(200).json(result);
    } catch (error) {
        res.status(404).json({
            message: 'Bản ghi Lo không tồn tại hoặc lỗi khi xóa: ' + error.message,
        });
    }
};
