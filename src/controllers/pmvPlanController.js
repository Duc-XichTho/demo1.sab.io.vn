import {
    checkDuyetPMVPlanService,
    createPMVPlanService, deletePMVPlanService,
    getAllPMVPlanService,
    getPMVPlanByIdService,
    updatePMVPlanService
} from "../services/pmvPlanService.js";

export const createPMVPlanController = async (req, res) => {
    const data = req.body;
    try {
        const team = await createPMVPlanService(data);
        res.status(201).json(team);
    } catch (error) {
        res.status(500).json({message: 'Lỗi khi tạo bản ghi PMVPlan: ' + error.message});
    }
};

export const getPMVPlanByIdController = async (req, res) => {
    const { id } = req.params; 

    try {
        const team = await getPMVPlanByIdService(id);
        res.status(200).json(team);
    } catch (error) {
        res.status(404).json({message: 'Bản ghi PMVPlan không tồn tại: ' + error.message});
    }
};

export const getAllPMVPlanController = async (req, res) => {
    try {
        const teamList = await getAllPMVPlanService();
        res.status(200).json(teamList);
    } catch (error) {
        res.status(500).json({
            message: 'Lỗi khi lấy danh sách bản ghi PMVPlan: ' + error.message,
        });
    }
};
export const checkDuyetPMVPlanController = async (req, res) => {
    try {
        const teamList = await checkDuyetPMVPlanService();
        res.status(200).json(teamList);
    } catch (error) {
        res.status(500).json({
            message: 'Lỗi khi lấy danh sách bản ghi PMVPlan: ' + error.message,
        });
    }
};

export const updatePMVPlanController = async (req, res) => {
    const data = req.body;
    try {
        const team = await updatePMVPlanService(data);
        res.status(200).json(team);
    } catch (error) {
        res.status(404).json({
            message: 'Bản ghi không tồn tại hoặc lỗi khi cập nhật: ' + error.message,
        });
    }
};

export const deletePMVPlanController = async (req, res) => {
    let ids = req.params.id;
    if (!Array.isArray(ids)) {
        ids = [ids];
    }

    if (ids.length === 0) {
        return res.status(400).json({message: 'Yêu cầu không hợp lệ: cần một hoặc nhiều ID.'});
    }

    try {
        const result = await deletePMVPlanService(ids);
        res.status(200).json(result);
    } catch (error) {
        res.status(404).json({
            message: 'Bản ghi PMVPlan không tồn tại hoặc lỗi khi xóa: ' + error.message,
        });
    }
};
