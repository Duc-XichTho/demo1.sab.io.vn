import {
    createActionLogService, deleteActionLogService,
    getAllActionLogService,
    getActionLogByIdService,
    updateActionLogService
} from "../services/actionLogService.js";

export const createActionLogController = async (req, res) => {
    const data = req.body;
    try {
        const team = await createActionLogService(data);
        res.status(201).json(team);
    } catch (error) {
        res.status(500).json({message: 'Lỗi khi tạo bản ghi ActionLog: ' + error.message});
    }
};

export const getActionLogByIdController = async (req, res) => {
    const { id } = req.params; 

    try {
        const team = await getActionLogByIdService(id);
        res.status(200).json(team);
    } catch (error) {
        res.status(404).json({message: 'Bản ghi ActionLog không tồn tại: ' + error.message});
    }
};

export const getAllActionLogController = async (req, res) => {
    try {
        const teamList = await getAllActionLogService();
        res.status(200).json(teamList);
    } catch (error) {
        res.status(500).json({
            message: 'Lỗi khi lấy danh sách bản ghi ActionLog: ' + error.message,
        });
    }
};

export const updateActionLogController = async (req, res) => {
    const data = req.body;
    try {
        const team = await updateActionLogService(data);
        res.status(200).json(team);
    } catch (error) {
        res.status(404).json({
            message: 'Bản ghi không tồn tại hoặc lỗi khi cập nhật: ' + error.message,
        });
    }
};

export const deleteActionLogController = async (req, res) => {
    let ids = req.params.id;
    if (!Array.isArray(ids)) {
        ids = [ids];
    }

    if (ids.length === 0) {
        return res.status(400).json({message: 'Yêu cầu không hợp lệ: cần một hoặc nhiều ID.'});
    }

    try {
        const result = await deleteActionLogService(ids);
        res.status(200).json(result);
    } catch (error) {
        res.status(404).json({
            message: 'Bản ghi ActionLog không tồn tại hoặc lỗi khi xóa: ' + error.message,
        });
    }
};
