import {
    createPMVPlanDetailService, deletePMVPlanDetailService,
    getAllPMVPlanDetailService,
    getPMVPlanDetailByIdService,
    updatePMVPlanDetailService
} from "../services/pmvPlanDetailService.js";

export const createPMVPlanDetailController = async (req, res) => {
    const data = req.body;
    try {
        const team = await createPMVPlanDetailService(data);
        res.status(201).json(team);
    } catch (error) {
        res.status(500).json({message: 'Lỗi khi tạo bản ghi PMVPlanDetail: ' + error.message});
    }
};

export const getPMVPlanDetailByIdController = async (req, res) => {
    const { id } = req.params; 

    try {
        const team = await getPMVPlanDetailByIdService(id);
        res.status(200).json(team);
    } catch (error) {
        res.status(404).json({message: 'Bản ghi PMVPlanDetail không tồn tại: ' + error.message});
    }
};

export const getAllPMVPlanDetailController = async (req, res) => {
    try {
        const teamList = await getAllPMVPlanDetailService();
        res.status(200).json(teamList);
    } catch (error) {
        res.status(500).json({
            message: 'Lỗi khi lấy danh sách bản ghi PMVPlanDetail: ' + error.message,
        });
    }
};

export const updatePMVPlanDetailController = async (req, res) => {
    const data = req.body;
    try {
        const team = await updatePMVPlanDetailService(data);
        res.status(200).json(team);
    } catch (error) {
        res.status(404).json({
            message: 'Bản ghi không tồn tại hoặc lỗi khi cập nhật: ' + error.message,
        });
    }
};

export const deletePMVPlanDetailController = async (req, res) => {
    let ids = req.params.id;
    if (!Array.isArray(ids)) {
        ids = [ids];
    }

    if (ids.length === 0) {
        return res.status(400).json({message: 'Yêu cầu không hợp lệ: cần một hoặc nhiều ID.'});
    }

    try {
        const result = await deletePMVPlanDetailService(ids);
        res.status(200).json(result);
    } catch (error) {
        res.status(404).json({
            message: 'Bản ghi PMVPlanDetail không tồn tại hoặc lỗi khi xóa: ' + error.message,
        });
    }
};
