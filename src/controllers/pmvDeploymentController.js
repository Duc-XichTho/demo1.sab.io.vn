import {
    createPMVDeploymentService,
    deletePMVDeploymentService, generateDatesByPeriodService,
    getAllPMVDeploymentService,
    getPMVDeploymentByIdService,
    getPMVDeploymentByPlanIdService,
    updatePMVDeploymentService
} from "../services/pmvDeploymentService.js";

export const createPMVDeploymentController = async (req, res) => {
    const data = req.body;
    try {
        const team = await createPMVDeploymentService(data);
        res.status(201).json(team);
    } catch (error) {
        res.status(500).json({message: 'Lỗi khi tạo bản ghi PMVDeployment: ' + error.message});
    }
};

export const getPMVDeploymentByIdController = async (req, res) => {
    const { id } = req.params; 

    try {
        const team = await getPMVDeploymentByIdService(id);
        res.status(200).json(team);
    } catch (error) {
        res.status(404).json({message: 'Bản ghi PMVDeployment không tồn tại: ' + error.message});
    }
};

export const generateDatesByPeriodController  = async (req, res) => {
    const { date_from, date_to, ...otherData } = req.body;

    try {
        const team = await generateDatesByPeriodService(date_from, date_to, otherData);
        res.status(200).json(team);
    } catch (error) {
        res.status(404).json({message: 'Bản ghi PMVDeployment không tồn tại: ' + error.message});
    }
};

export const getPMVDeploymentByPlanIdController = async (req, res) => {
    const { id } = req.params;

    try {
        const team = await getPMVDeploymentByPlanIdService(id);
        res.status(200).json(team);
    } catch (error) {
        res.status(404).json({message: 'Bản ghi PMVDeployment không tồn tại: ' + error.message});
    }
};

export const getAllPMVDeploymentController = async (req, res) => {
    try {
        const teamList = await getAllPMVDeploymentService();
        res.status(200).json(teamList);
    } catch (error) {
        res.status(500).json({
            message: 'Lỗi khi lấy danh sách bản ghi PMVDeployment: ' + error.message,
        });
    }
};

export const updatePMVDeploymentController = async (req, res) => {
    const data = req.body;
    try {
        const team = await updatePMVDeploymentService(data);
        res.status(200).json(team);
    } catch (error) {
        res.status(404).json({
            message: 'Bản ghi không tồn tại hoặc lỗi khi cập nhật: ' + error.message,
        });
    }
};

export const deletePMVDeploymentController = async (req, res) => {
    let ids = req.params.id;
    if (!Array.isArray(ids)) {
        ids = [ids];
    }

    if (ids.length === 0) {
        return res.status(400).json({message: 'Yêu cầu không hợp lệ: cần một hoặc nhiều ID.'});
    }

    try {
        const result = await deletePMVDeploymentService(ids);
        res.status(200).json(result);
    } catch (error) {
        res.status(404).json({
            message: 'Bản ghi PMVDeployment không tồn tại hoặc lỗi khi xóa: ' + error.message,
        });
    }
};
