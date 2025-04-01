import {
    createPMVDeploymentDetailService, deletePMVDeploymentDetailService,
    getAllPMVDeploymentDetailService,
    getPMVDeploymentDetailByIdService,
    updatePMVDeploymentDetailService, getPMVDeploymentDetailByDeploymentIdService
} from "../services/pmvDeploymentDetailService.js";

export const createPMVDeploymentDetailController = async (req, res) => {
    const data = req.body;
    try {
        const team = await createPMVDeploymentDetailService(data);
        res.status(201).json(team);
    } catch (error) {
        res.status(500).json({ message: 'Lỗi khi tạo bản ghi PMVDeploymentDetail: ' + error.message });
    }
};

export const getPMVDeploymentDetailByIdController = async (req, res) => {
    const { id } = req.params;

    try {
        const team = await getPMVDeploymentDetailByIdService(id);
        res.status(200).json(team);
    } catch (error) {
        res.status(404).json({ message: 'Bản ghi PMVDeploymentDetail không tồn tại: ' + error.message });
    }
};

export const getPMVDeploymentDetailByDeploymentIdController = async (req, res) => {
    const { deploymentId } = req.params;

    try {
        const data = await getPMVDeploymentDetailByDeploymentIdService(deploymentId);
        res.status(200).json(data);
    } catch (error) {
        res.status(404).json({ message: 'Bản ghi PMVDeploymentDetail không tồn tại:' + error.message });
    }
}

export const getAllPMVDeploymentDetailController = async (req, res) => {
    try {
        const teamList = await getAllPMVDeploymentDetailService();
        res.status(200).json(teamList);
    } catch (error) {
        res.status(500).json({
            message: 'Lỗi khi lấy danh sách bản ghi PMVDeploymentDetail: ' + error.message,
        });
    }
};

export const updatePMVDeploymentDetailController = async (req, res) => {
    const data = req.body;
    try {
        const team = await updatePMVDeploymentDetailService(data);
        res.status(200).json(team);
    } catch (error) {
        res.status(404).json({
            message: 'Bản ghi không tồn tại hoặc lỗi khi cập nhật: ' + error.message,
        });
    }
};

export const deletePMVDeploymentDetailController = async (req, res) => {
    let ids = req.params.id;
    if (!Array.isArray(ids)) {
        ids = [ids];
    }

    if (ids.length === 0) {
        return res.status(400).json({ message: 'Yêu cầu không hợp lệ: cần một hoặc nhiều ID.' });
    }

    try {
        const result = await deletePMVDeploymentDetailService(ids);
        res.status(200).json(result);
    } catch (error) {
        res.status(404).json({
            message: 'Bản ghi PMVDeploymentDetail không tồn tại hoặc lỗi khi xóa: ' + error.message,
        });
    }
};
