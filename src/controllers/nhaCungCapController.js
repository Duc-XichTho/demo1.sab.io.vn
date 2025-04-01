import {
    createNhaCungCapService, deleteNhaCungCapService,
    getAllNhaCungCapService,
    getNhaCungCapByIdService,
    updateNhaCungCapService
} from "../services/nhaCungCapService.js";

export const createNhaCungCapController = async (req, res) => {
    const data = req.body;
    try {
        const team = await createNhaCungCapService(data);
        res.status(201).json(team);
    } catch (error) {
        res.status(500).json({message: 'Lỗi khi tạo bản ghi NhaCungCap: ' + error.message});
    }
};

export const getNhaCungCapByIdController = async (req, res) => {
    const { id } = req.params; 

    try {
        const team = await getNhaCungCapByIdService(id);
        res.status(200).json(team);
    } catch (error) {
        res.status(404).json({message: 'Bản ghi NhaCungCap không tồn tại: ' + error.message});
    }
};

export const getAllNhaCungCapController = async (req, res) => {
    try {
        const teamList = await getAllNhaCungCapService();
        res.status(200).json(teamList);
    } catch (error) {
        res.status(500).json({
            message: 'Lỗi khi lấy danh sách bản ghi NhaCungCap: ' + error.message,
        });
    }
};

export const updateNhaCungCapController = async (req, res) => {
    const data = req.body;
    try {
        const team = await updateNhaCungCapService(data);
        res.status(200).json(team);
    } catch (error) {
        res.status(404).json({
            message: 'Bản ghi không tồn tại hoặc lỗi khi cập nhật: ' + error.message,
        });
    }
};

export const deleteNhaCungCapController = async (req, res) => {
    let ids = req.params.id;
    if (!Array.isArray(ids)) {
        ids = [ids];
    }

    if (ids.length === 0) {
        return res.status(400).json({message: 'Yêu cầu không hợp lệ: cần một hoặc nhiều ID.'});
    }

    try {
        const result = await deleteNhaCungCapService(ids);
        res.status(200).json(result);
    } catch (error) {
        res.status(404).json({
            message: 'Bản ghi NhaCungCap không tồn tại hoặc lỗi khi xóa: ' + error.message,
        });
    }
};
