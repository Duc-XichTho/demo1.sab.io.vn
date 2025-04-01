import {
    createPMVChuKyService, deletePMVChuKyService,
    getAllPMVChuKyService,
    getPMVChuKyByIdService,
    updatePMVChuKyService
} from "../services/pmvChuKyService.js";

export const createPMVChuKyController = async (req, res) => {
    const data = req.body;
    try {
        const team = await createPMVChuKyService(data);
        res.status(201).json(team);
    } catch (error) {
        res.status(500).json({message: 'Lỗi khi tạo bản ghi PMVChuKy: ' + error.message});
    }
};

export const getPMVChuKyByIdController = async (req, res) => {
    const { id } = req.params; 

    try {
        const team = await getPMVChuKyByIdService(id);
        res.status(200).json(team);
    } catch (error) {
        res.status(404).json({message: 'Bản ghi PMVChuKy không tồn tại: ' + error.message});
    }
};

export const getAllPMVChuKyController = async (req, res) => {
    try {
        const teamList = await getAllPMVChuKyService();
        res.status(200).json(teamList);
    } catch (error) {
        res.status(500).json({
            message: 'Lỗi khi lấy danh sách bản ghi PMVChuKy: ' + error.message,
        });
    }
};

export const updatePMVChuKyController = async (req, res) => {
    const data = req.body;
    try {
        const team = await updatePMVChuKyService(data);
        res.status(200).json(team);
    } catch (error) {
        res.status(404).json({
            message: 'Bản ghi không tồn tại hoặc lỗi khi cập nhật: ' + error.message,
        });
    }
};

export const deletePMVChuKyController = async (req, res) => {
    let ids = req.params.id;
    if (!Array.isArray(ids)) {
        ids = [ids];
    }

    if (ids.length === 0) {
        return res.status(400).json({message: 'Yêu cầu không hợp lệ: cần một hoặc nhiều ID.'});
    }

    try {
        const result = await deletePMVChuKyService(ids);
        res.status(200).json(result);
    } catch (error) {
        res.status(404).json({
            message: 'Bản ghi PMVChuKy không tồn tại hoặc lỗi khi xóa: ' + error.message,
        });
    }
};
