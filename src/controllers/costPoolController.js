import {
    createCostPoolService, deleteCostPoolService,
    getAllCostPoolService,
    getCostPoolByIdService,
    updateCostPoolService
} from "../services/costPoolService.js";

export const createCostPoolController = async (req, res) => {
    const data = req.body;
    try {
        const team = await createCostPoolService(data);
        res.status(201).json(team);
    } catch (error) {
        res.status(500).json({message: 'Lỗi khi tạo bản ghi CostPool: ' + error.message});
    }
};

export const getCostPoolByIdController = async (req, res) => {
    const { id } = req.params; 

    try {
        const team = await getCostPoolByIdService(id);
        res.status(200).json(team);
    } catch (error) {
        res.status(404).json({message: 'Bản ghi CostPool không tồn tại: ' + error.message});
    }
};

export const getAllCostPoolController = async (req, res) => {
    try {
        const teamList = await getAllCostPoolService();
        res.status(200).json(teamList);
    } catch (error) {
        res.status(500).json({
            message: 'Lỗi khi lấy danh sách bản ghi CostPool: ' + error.message,
        });
    }
};

export const updateCostPoolController = async (req, res) => {
    const data = req.body;
    try {
        const team = await updateCostPoolService(data);
        res.status(200).json(team);
    } catch (error) {
        res.status(404).json({
            message: 'Bản ghi không tồn tại hoặc lỗi khi cập nhật: ' + error.message,
        });
    }
};

export const deleteCostPoolController = async (req, res) => {
    let ids = req.params.id;
    if (!Array.isArray(ids)) {
        ids = [ids];
    }

    if (ids.length === 0) {
        return res.status(400).json({message: 'Yêu cầu không hợp lệ: cần một hoặc nhiều ID.'});
    }

    try {
        const result = await deleteCostPoolService(ids);
        res.status(200).json(result);
    } catch (error) {
        res.status(404).json({
            message: 'Bản ghi CostPool không tồn tại hoặc lỗi khi xóa: ' + error.message,
        });
    }
};
