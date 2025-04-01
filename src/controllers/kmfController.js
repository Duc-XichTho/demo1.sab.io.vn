import {
    createKmfService, deleteKmfService,
    getAllKmfService,
    getKmfByIdService,
    updateKmfService
} from "../services/kmfService.js";

export const createKmfController = async (req, res) => {
    const data = req.body;
    try {
        const team = await createKmfService(data);
        res.status(201).json(team);
    } catch (error) {
        res.status(500).json({message: 'Lỗi khi tạo bản ghi Kmf: ' + error.message});
    }
};

export const getKmfByIdController = async (req, res) => {
    const { id } = req.params; 

    try {
        const team = await getKmfByIdService(id);
        res.status(200).json(team);
    } catch (error) {
        res.status(404).json({message: 'Bản ghi Kmf không tồn tại: ' + error.message});
    }
};

export const getAllKmfController = async (req, res) => {
    try {
        const teamList = await getAllKmfService();
        res.status(200).json(teamList);
    } catch (error) {
        res.status(500).json({
            message: 'Lỗi khi lấy danh sách bản ghi Kmf: ' + error.message,
        });
    }
};

export const updateKmfController = async (req, res) => {
    const data = req.body;
    try {
        const team = await updateKmfService(data);
        res.status(200).json(team);
    } catch (error) {
        res.status(404).json({
            message: 'Bản ghi không tồn tại hoặc lỗi khi cập nhật: ' + error.message,
        });
    }
};

export const deleteKmfController = async (req, res) => {
    let ids = req.params.id;
    if (!Array.isArray(ids)) {
        ids = [ids];
    }

    if (ids.length === 0) {
        return res.status(400).json({message: 'Yêu cầu không hợp lệ: cần một hoặc nhiều ID.'});
    }

    try {
        const result = await deleteKmfService(ids);
        res.status(200).json(result);
    } catch (error) {
        res.status(404).json({
            message: 'Bản ghi Kmf không tồn tại hoặc lỗi khi xóa: ' + error.message,
        });
    }
};
