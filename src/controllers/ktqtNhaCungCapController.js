import {
    createKtqtNhaCungCapService, deleteKtqtNhaCungCapService,
    getAllKtqtNhaCungCapService,
    getKtqtNhaCungCapByIdService,
    updateKtqtNhaCungCapService
} from "../services/ktqtNhaCungCapService.js";

export const createKtqtNhaCungCapController = async (req, res) => {
    const data = req.body;
    try {
        const team = await createKtqtNhaCungCapService(data);
        res.status(201).json(team);
    } catch (error) {
        res.status(500).json({message: 'Lỗi khi tạo bản ghi KtqtNhaCungCap: ' + error.message});
    }
};

export const getKtqtNhaCungCapByIdController = async (req, res) => {
    const { id } = req.params; 

    try {
        const team = await getKtqtNhaCungCapByIdService(id);
        res.status(200).json(team);
    } catch (error) {
        res.status(404).json({message: 'Bản ghi KtqtNhaCungCap không tồn tại: ' + error.message});
    }
};

export const getAllKtqtNhaCungCapController = async (req, res) => {
    try {
        const teamList = await getAllKtqtNhaCungCapService();
        res.status(200).json(teamList);
    } catch (error) {
        res.status(500).json({
            message: 'Lỗi khi lấy danh sách bản ghi KtqtNhaCungCap: ' + error.message,
        });
    }
};

export const updateKtqtNhaCungCapController = async (req, res) => {
    const data = req.body;
    try {
        const team = await updateKtqtNhaCungCapService(data);
        res.status(200).json(team);
    } catch (error) {
        res.status(404).json({
            message: 'Bản ghi không tồn tại hoặc lỗi khi cập nhật: ' + error.message,
        });
    }
};

export const deleteKtqtNhaCungCapController = async (req, res) => {
    let ids = req.params.id;
    if (!Array.isArray(ids)) {
        ids = [ids];
    }

    if (ids.length === 0) {
        return res.status(400).json({message: 'Yêu cầu không hợp lệ: cần một hoặc nhiều ID.'});
    }

    try {
        const result = await deleteKtqtNhaCungCapService(ids);
        res.status(200).json(result);
    } catch (error) {
        res.status(404).json({
            message: 'Bản ghi KtqtNhaCungCap không tồn tại hoặc lỗi khi xóa: ' + error.message,
        });
    }
};
