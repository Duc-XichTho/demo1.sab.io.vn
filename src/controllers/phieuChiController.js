import {
    createPhieuChiService, deletePhieuChiService,
    getAllPhieuChiService, getPhieuChiByCardIdService,
    getPhieuChiByIdService,
    updatePhieuChiService
} from "../services/phieuChiService.js";

export const createPhieuChiController = async (req, res) => {
    const data = req.body;
    try {
        const team = await createPhieuChiService(data);
        res.status(201).json(team);
    } catch (error) {
        res.status(500).json({message: 'Lỗi khi tạo bản ghi PhieuChi: ' + error.message});
    }
};

export const getPhieuChiByIdController = async (req, res) => {
    const { id } = req.params; 

    try {
        const team = await getPhieuChiByIdService(id);
        res.status(200).json(team);
    } catch (error) {
        res.status(404).json({message: 'Bản ghi PhieuChi không tồn tại: ' + error.message});
    }
};

export const getPhieuChiByIdCardController = async (req, res) => {
    const { id } = req.params;

    try {
        const team = await getPhieuChiByCardIdService(id);
        res.status(200).json(team);
    } catch (error) {
        res.status(404).json({message: 'Bản ghi PhieuChi không tồn tại: ' + error.message});
    }
};

export const getAllPhieuChiController = async (req, res) => {
    try {
        const teamList = await getAllPhieuChiService();
        res.status(200).json(teamList);
    } catch (error) {
        res.status(500).json({
            message: 'Lỗi khi lấy danh sách bản ghi PhieuChi: ' + error.message,
        });
    }
};

export const updatePhieuChiController = async (req, res) => {
    const data = req.body;
    try {
        const team = await updatePhieuChiService(data);
        res.status(200).json(team);
    } catch (error) {
        res.status(404).json({
            message: 'Bản ghi không tồn tại hoặc lỗi khi cập nhật: ' + error.message,
        });
    }
};

export const deletePhieuChiController = async (req, res) => {
    let ids = req.params.id;
    if (!Array.isArray(ids)) {
        ids = [ids];
    }

    if (ids.length === 0) {
        return res.status(400).json({message: 'Yêu cầu không hợp lệ: cần một hoặc nhiều ID.'});
    }

    try {
        const result = await deletePhieuChiService(ids);
        res.status(200).json(result);
    } catch (error) {
        res.status(404).json({
            message: 'Bản ghi PhieuChi không tồn tại hoặc lỗi khi xóa: ' + error.message,
        });
    }
};
