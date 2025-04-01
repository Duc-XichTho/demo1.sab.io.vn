import {
    createPhieuThuService, deletePhieuThuService,
    getAllPhieuThuService, getPhieuThuByCardIdService,
    getPhieuThuByIdService,
    updatePhieuThuService
} from "../services/phieuThuService.js";

export const createPhieuThuController = async (req, res) => {
    const data = req.body;
    try {
        const team = await createPhieuThuService(data);
        res.status(201).json(team);
    } catch (error) {
        res.status(500).json({message: 'Lỗi khi tạo bản ghi PhieuThu: ' + error.message});
    }
};

export const getPhieuThuByIdController = async (req, res) => {
    const { id } = req.params; 

    try {
        const team = await getPhieuThuByIdService(id);
        res.status(200).json(team);
    } catch (error) {
        res.status(404).json({message: 'Bản ghi PhieuThu không tồn tại: ' + error.message});
    }
};
export const getPhieuThuByCardIdController = async (req, res) => {
    const { id } = req.params;

    try {
        const team = await getPhieuThuByCardIdService(id);
        res.status(200).json(team);
    } catch (error) {
        res.status(404).json({message: 'Bản ghi PhieuThu không tồn tại: ' + error.message});
    }
};

export const getAllPhieuThuController = async (req, res) => {
    try {
        const teamList = await getAllPhieuThuService();
        res.status(200).json(teamList);
    } catch (error) {
        res.status(500).json({
            message: 'Lỗi khi lấy danh sách bản ghi PhieuThu: ' + error.message,
        });
    }
};

export const updatePhieuThuController = async (req, res) => {
    const data = req.body;
    try {
        const team = await updatePhieuThuService(data);
        res.status(200).json(team);
    } catch (error) {
        res.status(404).json({
            message: 'Bản ghi không tồn tại hoặc lỗi khi cập nhật: ' + error.message,
        });
    }
};

export const deletePhieuThuController = async (req, res) => {
    let ids = req.params.id;
    if (!Array.isArray(ids)) {
        ids = [ids];
    }

    if (ids.length === 0) {
        return res.status(400).json({message: 'Yêu cầu không hợp lệ: cần một hoặc nhiều ID.'});
    }

    try {
        const result = await deletePhieuThuService(ids);
        res.status(200).json(result);
    } catch (error) {
        res.status(404).json({
            message: 'Bản ghi PhieuThu không tồn tại hoặc lỗi khi xóa: ' + error.message,
        });
    }
};
