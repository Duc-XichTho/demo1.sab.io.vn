import {
    createPMVSkuAllocationService, deletePMVSkuAllocationService,
    getAllPMVSkuAllocationService, getAllDetailIDService,
    getPMVSkuAllocationByIdService,
    updatePMVSkuAllocationService, getAllPMVSkuAllocationByDeployDetailIdService
} from "../services/pmvSkuAllocationService.js";

export const createPMVSkuAllocationController = async (req, res) => {
    const data = req.body;
    try {
        const team = await createPMVSkuAllocationService(data);
        res.status(201).json(team);
    } catch (error) {
        res.status(500).json({ message: 'Lỗi khi tạo bản ghi PMVSkuAllocation: ' + error.message });
    }
};

export const getPMVSkuAllocationByIdController = async (req, res) => {
    const { id } = req.params;

    try {
        const team = await getPMVSkuAllocationByIdService(id);
        res.status(200).json(team);
    } catch (error) {
        res.status(404).json({ message: 'Bản ghi PMVSkuAllocation không tồn tại: ' + error.message });
    }
};

export const getAllPMVSkuAllocationByDeployDetailIdController = async (req, res) => {
    const { deployDetailId } = req.params;

    try {
        const data = await getAllPMVSkuAllocationByDeployDetailIdService(deployDetailId);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({
            message: 'Lỗi khi lấy danh sách bản ghi getAllPMVSkuAllocationByDeployDetailIdController:' + error.message,
        });
    }
}

export const getAllPMVSkuAllocationController = async (req, res) => {
    try {
        const teamList = await getAllPMVSkuAllocationService();
        res.status(200).json(teamList);
    } catch (error) {
        res.status(500).json({
            message: 'Lỗi khi lấy danh sách bản ghi PMVSkuAllocation: ' + error.message,
        });
    }
};

export const getAllDetailIDController = async (req, res) => {
    try {
        const data = await getAllDetailIDService();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({
            message: 'Lỗi khi lấy danh sách bản ghi getAllDetailIDService:' + error.message,
        });
    }
}

export const updatePMVSkuAllocationController = async (req, res) => {
    const data = req.body;
    try {
        const team = await updatePMVSkuAllocationService(data);
        res.status(200).json(team);
    } catch (error) {
        res.status(404).json({
            message: 'Bản ghi không tồn tại hoặc lỗi khi cập nhật: ' + error.message,
        });
    }
};

export const deletePMVSkuAllocationController = async (req, res) => {
    let ids = req.params.id;
    if (!Array.isArray(ids)) {
        ids = [ids];
    }

    if (ids.length === 0) {
        return res.status(400).json({ message: 'Yêu cầu không hợp lệ: cần một hoặc nhiều ID.' });
    }

    try {
        const result = await deletePMVSkuAllocationService(ids);
        res.status(200).json(result);
    } catch (error) {
        res.status(404).json({
            message: 'Bản ghi PMVSkuAllocation không tồn tại hoặc lỗi khi xóa: ' + error.message,
        });
    }
};
