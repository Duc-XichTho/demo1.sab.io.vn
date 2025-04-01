import {
    createLeadManagementService, deleteLeadManagementService,
    getAllLeadManagementService,
    getLeadManagementByIdService,
    updateLeadManagementService
} from "../services/leadManagementService.js";

export const createLeadManagementController = async (req, res) => {
    const data = req.body;
    try {
        const team = await createLeadManagementService(data);
        res.status(201).json(team);
    } catch (error) {
        res.status(500).json({message: 'Lỗi khi tạo bản ghi LeadManagement: ' + error.message});
    }
};

export const getLeadManagementByIdController = async (req, res) => {
    const { id } = req.params; 

    try {
        const team = await getLeadManagementByIdService(id);
        res.status(200).json(team);
    } catch (error) {
        res.status(404).json({message: 'Bản ghi LeadManagement không tồn tại: ' + error.message});
    }
};

export const getAllLeadManagementController = async (req, res) => {
    try {
        const teamList = await getAllLeadManagementService();
        res.status(200).json(teamList);
    } catch (error) {
        res.status(500).json({
            message: 'Lỗi khi lấy danh sách bản ghi LeadManagement: ' + error.message,
        });
    }
};

export const updateLeadManagementController = async (req, res) => {
    const data = req.body;
    try {
        const team = await updateLeadManagementService(data);
        res.status(200).json(team);
    } catch (error) {
        res.status(404).json({
            message: 'Bản ghi không tồn tại hoặc lỗi khi cập nhật: ' + error.message,
        });
    }
};

export const deleteLeadManagementController = async (req, res) => {
    let ids = req.params.id;
    if (!Array.isArray(ids)) {
        ids = [ids];
    }

    if (ids.length === 0) {
        return res.status(400).json({message: 'Yêu cầu không hợp lệ: cần một hoặc nhiều ID.'});
    }

    try {
        const result = await deleteLeadManagementService(ids);
        res.status(200).json(result);
    } catch (error) {
        res.status(404).json({
            message: 'Bản ghi LeadManagement không tồn tại hoặc lỗi khi xóa: ' + error.message,
        });
    }
};
