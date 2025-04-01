import {
    createKmtcService, deleteKmtcService,
    getAllKmtcService,
    getKmtcByIdService,
    updateKmtcService
} from "../services/kmtcService.js";

export const createKmtcController = async (req, res) => {
    const data = req.body;
    try {
        const team = await createKmtcService(data);
        res.status(201).json(team);
    } catch (error) {
        res.status(500).json({message: 'Lỗi khi tạo bản ghi Kmtc: ' + error.message});
    }
};

export const getKmtcByIdController = async (req, res) => {
    const { id } = req.params; 

    try {
        const team = await getKmtcByIdService(id);
        res.status(200).json(team);
    } catch (error) {
        res.status(404).json({message: 'Bản ghi Kmtc không tồn tại: ' + error.message});
    }
};

export const getAllKmtcController = async (req, res) => {
    try {
        const teamList = await getAllKmtcService();
        res.status(200).json(teamList);
    } catch (error) {
        res.status(500).json({
            message: 'Lỗi khi lấy danh sách bản ghi Kmtc: ' + error.message,
        });
    }
};

export const updateKmtcController = async (req, res) => {
    const data = req.body;
    try {
        const team = await updateKmtcService(data);
        res.status(200).json(team);
    } catch (error) {
        res.status(404).json({
            message: 'Bản ghi không tồn tại hoặc lỗi khi cập nhật: ' + error.message,
        });
    }
};

export const deleteKmtcController = async (req, res) => {
    let ids = req.params.id;
    if (!Array.isArray(ids)) {
        ids = [ids];
    }

    if (ids.length === 0) {
        return res.status(400).json({message: 'Yêu cầu không hợp lệ: cần một hoặc nhiều ID.'});
    }

    try {
        const result = await deleteKmtcService(ids);
        res.status(200).json(result);
    } catch (error) {
        res.status(404).json({
            message: 'Bản ghi Kmtc không tồn tại hoặc lỗi khi xóa: ' + error.message,
        });
    }
};
