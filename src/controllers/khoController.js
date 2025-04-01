import {
    createKhoService, deleteKhoService,
    getAllKhoService,
    getKhoByIdService,
    updateKhoService
} from "../services/khoService.js";

export const createKhoController = async (req, res) => {
    const data = req.body;
    try {
        const team = await createKhoService(data);
        res.status(201).json(team);
    } catch (error) {
        res.status(500).json({message: 'Lỗi khi tạo bản ghi Kho: ' + error.message});
    }
};

export const getKhoByIdController = async (req, res) => {
    const { id } = req.params; 

    try {
        const team = await getKhoByIdService(id);
        res.status(200).json(team);
    } catch (error) {
        res.status(404).json({message: 'Bản ghi Kho không tồn tại: ' + error.message});
    }
};

export const getAllKhoController = async (req, res) => {
    try {
        const teamList = await getAllKhoService();
        res.status(200).json(teamList);
    } catch (error) {
        res.status(500).json({
            message: 'Lỗi khi lấy danh sách bản ghi Kho: ' + error.message,
        });
    }
};

export const updateKhoController = async (req, res) => {
    const data = req.body;
    try {
        const team = await updateKhoService(data);
        res.status(200).json(team);
    } catch (error) {
        res.status(404).json({
            message: 'Bản ghi không tồn tại hoặc lỗi khi cập nhật: ' + error.message,
        });
    }
};

export const deleteKhoController = async (req, res) => {
    let ids = req.params.id;
    if (!Array.isArray(ids)) {
        ids = [ids];
    }

    if (ids.length === 0) {
        return res.status(400).json({message: 'Yêu cầu không hợp lệ: cần một hoặc nhiều ID.'});
    }

    try {
        const result = await deleteKhoService(ids);
        res.status(200).json(result);
    } catch (error) {
        res.status(404).json({
            message: 'Bản ghi Kho không tồn tại hoặc lỗi khi xóa: ' + error.message,
        });
    }
};
