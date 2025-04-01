import {
    createResultCrossCheckService, deleteResultCrossCheckService,
    getAllResultCrossCheckService,
    getResultCrossCheckByIdService,
    updateResultCrossCheckService
} from "../services/resultCrossCheckService.js";

export const createResultCrossCheckController = async (req, res) => {
    const data = req.body;
    try {
        const team = await createResultCrossCheckService(data);
        res.status(201).json(team);
    } catch (error) {
        res.status(500).json({message: 'Lỗi khi tạo bản ghi ResultCrossCheck: ' + error.message});
    }
};

export const getResultCrossCheckByIdController = async (req, res) => {
    const { id } = req.params; 

    try {
        const team = await getResultCrossCheckByIdService(id);
        res.status(200).json(team);
    } catch (error) {
        res.status(404).json({message: 'Bản ghi ResultCrossCheck không tồn tại: ' + error.message});
    }
};

export const getAllResultCrossCheckController = async (req, res) => {
    try {
        const teamList = await getAllResultCrossCheckService();
        res.status(200).json(teamList);
    } catch (error) {
        res.status(500).json({
            message: 'Lỗi khi lấy danh sách bản ghi ResultCrossCheck: ' + error.message,
        });
    }
};

export const updateResultCrossCheckController = async (req, res) => {
    const data = req.body;
    try {
        const team = await updateResultCrossCheckService(data);
        res.status(200).json(team);
    } catch (error) {
        res.status(404).json({
            message: 'Bản ghi không tồn tại hoặc lỗi khi cập nhật: ' + error.message,
        });
    }
};

export const deleteResultCrossCheckController = async (req, res) => {
    let ids = req.params.id;
    if (!Array.isArray(ids)) {
        ids = [ids];
    }

    if (ids.length === 0) {
        return res.status(400).json({message: 'Yêu cầu không hợp lệ: cần một hoặc nhiều ID.'});
    }

    try {
        const result = await deleteResultCrossCheckService(ids);
        res.status(200).json(result);
    } catch (error) {
        res.status(404).json({
            message: 'Bản ghi ResultCrossCheck không tồn tại hoặc lỗi khi xóa: ' + error.message,
        });
    }
};
