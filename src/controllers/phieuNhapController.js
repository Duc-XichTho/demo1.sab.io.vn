import {
    createPhieuNhapService, deletePhieuNhapService,
    getAllPhieuNhapService, getPhieuNhapByCardIdService,
    getPhieuNhapByIdService,
    updatePhieuNhapService
} from "../services/phieuNhapService.js";

export const createPhieuNhapController = async (req, res) => {
    const data = req.body;
    try {
        const team = await createPhieuNhapService(data);
        res.status(201).json(team);
    } catch (error) {
        res.status(500).json({message: 'Lỗi khi tạo bản ghi PhieuNhap: ' + error.message});
    }
};

export const getPhieuNhapByIdController = async (req, res) => {
    const { id } = req.params; 

    try {
        const team = await getPhieuNhapByIdService(id);
        res.status(200).json(team);
    } catch (error) {
        res.status(404).json({message: 'Bản ghi PhieuNhap không tồn tại: ' + error.message});
    }
};

export const getPhieuNhapByIdCardController = async (req, res) => {
    const { id } = req.params;

    try {
        const team = await getPhieuNhapByCardIdService(id);
        res.status(200).json(team);
    } catch (error) {
        res.status(404).json({message: 'Bản ghi PhieuNhap không tồn tại: ' + error.message});
    }
};

export const getAllPhieuNhapController = async (req, res) => {
    try {
        const teamList = await getAllPhieuNhapService();
        res.status(200).json(teamList);
    } catch (error) {
        res.status(500).json({
            message: 'Lỗi khi lấy danh sách bản ghi PhieuNhap: ' + error.message,
        });
    }
};

export const updatePhieuNhapController = async (req, res) => {
    const data = req.body;
    try {
        const team = await updatePhieuNhapService(data);
        res.status(200).json(team);
    } catch (error) {
        res.status(404).json({
            message: 'Bản ghi không tồn tại hoặc lỗi khi cập nhật: ' + error.message,
        });
    }
};

export const deletePhieuNhapController = async (req, res) => {
    let ids = req.params.id;
    if (!Array.isArray(ids)) {
        ids = [ids];
    }

    if (ids.length === 0) {
        return res.status(400).json({message: 'Yêu cầu không hợp lệ: cần một hoặc nhiều ID.'});
    }

    try {
        const result = await deletePhieuNhapService(ids);
        res.status(200).json(result);
    } catch (error) {
        res.status(404).json({
            message: 'Bản ghi PhieuNhap không tồn tại hoặc lỗi khi xóa: ' + error.message,
        });
    }
};
