import {
    createTaiSanDauTuService, deleteTaiSanDauTuService,
    getAllTaiSanDauTuService,
    getTaiSanDauTuByIdService,
    updateTaiSanDauTuService
} from "../services/taiSanDauTuService.js";

export const createTaiSanDauTuController = async (req, res) => {
    const data = req.body;
    try {
        const team = await createTaiSanDauTuService(data);
        res.status(201).json(team);
    } catch (error) {
        res.status(500).json({message: 'Lỗi khi tạo bản ghi TaiSanDauTu: ' + error.message});
    }
};

export const getTaiSanDauTuByIdController = async (req, res) => {
    const { id } = req.params; 

    try {
        const team = await getTaiSanDauTuByIdService(id);
        res.status(200).json(team);
    } catch (error) {
        res.status(404).json({message: 'Bản ghi TaiSanDauTu không tồn tại: ' + error.message});
    }
};

export const getAllTaiSanDauTuController = async (req, res) => {
    try {
        const teamList = await getAllTaiSanDauTuService();
        res.status(200).json(teamList);
    } catch (error) {
        res.status(500).json({
            message: 'Lỗi khi lấy danh sách bản ghi TaiSanDauTu: ' + error.message,
        });
    }
};

export const updateTaiSanDauTuController = async (req, res) => {
    const data = req.body;
    try {
        const team = await updateTaiSanDauTuService(data);
        res.status(200).json(team);
    } catch (error) {
        res.status(404).json({
            message: 'Bản ghi không tồn tại hoặc lỗi khi cập nhật: ' + error.message,
        });
    }
};

export const deleteTaiSanDauTuController = async (req, res) => {
    let ids = req.params.id;
    if (!Array.isArray(ids)) {
        ids = [ids];
    }

    if (ids.length === 0) {
        return res.status(400).json({message: 'Yêu cầu không hợp lệ: cần một hoặc nhiều ID.'});
    }

    try {
        const result = await deleteTaiSanDauTuService(ids);
        res.status(200).json(result);
    } catch (error) {
        res.status(404).json({
            message: 'Bản ghi TaiSanDauTu không tồn tại hoặc lỗi khi xóa: ' + error.message,
        });
    }
};
