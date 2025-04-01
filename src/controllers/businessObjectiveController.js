import {
    createBusinessObjectiveService, deleteBusinessObjectiveService,
    getAllBusinessObjectiveService,
    getBusinessObjectiveByIdService,
    updateBusinessObjectiveService
} from "../services/businessObjectiveService.js";

export const createBusinessObjectiveController = async (req, res) => {
    const data = req.body;
    try {
        const team = await createBusinessObjectiveService(data);
        res.status(201).json(team);
    } catch (error) {
        res.status(500).json({message: 'Lỗi khi tạo bản ghi BusinessObjective: ' + error.message});
    }
};

export const getBusinessObjectiveByIdController = async (req, res) => {
    const { id } = req.params; 

    try {
        const team = await getBusinessObjectiveByIdService(id);
        res.status(200).json(team);
    } catch (error) {
        res.status(404).json({message: 'Bản ghi BusinessObjective không tồn tại: ' + error.message});
    }
};

export const getAllBusinessObjectiveController = async (req, res) => {
    try {
        const teamList = await getAllBusinessObjectiveService();
        res.status(200).json(teamList);
    } catch (error) {
        res.status(500).json({
            message: 'Lỗi khi lấy danh sách bản ghi BusinessObjective: ' + error.message,
        });
    }
};

export const updateBusinessObjectiveController = async (req, res) => {
    const data = req.body;
    try {
        const team = await updateBusinessObjectiveService(data);
        res.status(200).json(team);
    } catch (error) {
        res.status(404).json({
            message: 'Bản ghi không tồn tại hoặc lỗi khi cập nhật: ' + error.message,
        });
    }
};

export const deleteBusinessObjectiveController = async (req, res) => {
    let ids = req.params.id;
    if (!Array.isArray(ids)) {
        ids = [ids];
    }

    if (ids.length === 0) {
        return res.status(400).json({message: 'Yêu cầu không hợp lệ: cần một hoặc nhiều ID.'});
    }

    try {
        const result = await deleteBusinessObjectiveService(ids);
        res.status(200).json(result);
    } catch (error) {
        res.status(404).json({
            message: 'Bản ghi BusinessObjective không tồn tại hoặc lỗi khi xóa: ' + error.message,
        });
    }
};
