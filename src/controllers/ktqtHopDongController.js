import {
    createKtqtHopDongService, deleteKtqtHopDongService,
    getAllKtqtHopDongService,
    getKtqtHopDongByIdService,
    updateKtqtHopDongService
} from "../services/ktqtHopDongService.js";

export const createKtqtHopDongController = async (req, res) => {
    const data = req.body;
    try {
        const team = await createKtqtHopDongService(data);
        res.status(201).json(team);
    } catch (error) {
        res.status(500).json({message: 'Lỗi khi tạo bản ghi KtqtHopDong: ' + error.message});
    }
};

export const getKtqtHopDongByIdController = async (req, res) => {
    const { id } = req.params; 

    try {
        const team = await getKtqtHopDongByIdService(id);
        res.status(200).json(team);
    } catch (error) {
        res.status(404).json({message: 'Bản ghi KtqtHopDong không tồn tại: ' + error.message});
    }
};

export const getAllKtqtHopDongController = async (req, res) => {
    try {
        const teamList = await getAllKtqtHopDongService();
        res.status(200).json(teamList);
    } catch (error) {
        res.status(500).json({
            message: 'Lỗi khi lấy danh sách bản ghi KtqtHopDong: ' + error.message,
        });
    }
};

export const updateKtqtHopDongController = async (req, res) => {
    const data = req.body;
    try {
        const team = await updateKtqtHopDongService(data);
        res.status(200).json(team);
    } catch (error) {
        res.status(404).json({
            message: 'Bản ghi không tồn tại hoặc lỗi khi cập nhật: ' + error.message,
        });
    }
};

export const deleteKtqtHopDongController = async (req, res) => {
    let ids = req.params.id;
    if (!Array.isArray(ids)) {
        ids = [ids];
    }

    if (ids.length === 0) {
        return res.status(400).json({message: 'Yêu cầu không hợp lệ: cần một hoặc nhiều ID.'});
    }

    try {
        const result = await deleteKtqtHopDongService(ids);
        res.status(200).json(result);
    } catch (error) {
        res.status(404).json({
            message: 'Bản ghi KtqtHopDong không tồn tại hoặc lỗi khi xóa: ' + error.message,
        });
    }
};
