import {
    createCrossCheckService, deleteCrossCheckService,
    getAllCrossCheckService,
    getCrossCheckByIdService,
    updateCrossCheckService
} from "../services/crossCheckService.js";

export const createCrossCheckController = async (req, res) => {
    const data = req.body;
    try {
        const team = await createCrossCheckService(data);
        res.status(201).json(team);
    } catch (error) {
        res.status(500).json({message: 'Lỗi khi tạo bản ghi CrossCheck: ' + error.message});
    }
};

export const getCrossCheckByIdController = async (req, res) => {
    const { id } = req.params; 

    try {
        const team = await getCrossCheckByIdService(id);
        res.status(200).json(team);
    } catch (error) {
        res.status(404).json({message: 'Bản ghi CrossCheck không tồn tại: ' + error.message});
    }
};

export const getAllCrossCheckController = async (req, res) => {
    try {
        const teamList = await getAllCrossCheckService();
        res.status(200).json(teamList);
    } catch (error) {
        res.status(500).json({
            message: 'Lỗi khi lấy danh sách bản ghi CrossCheck: ' + error.message,
        });
    }
};

export const updateCrossCheckController = async (req, res) => {
    const data = req.body;
    try {
        const team = await updateCrossCheckService(data);
        res.status(200).json(team);
    } catch (error) {
        res.status(404).json({
            message: 'Bản ghi không tồn tại hoặc lỗi khi cập nhật: ' + error.message,
        });
    }
};

export const deleteCrossCheckController = async (req, res) => {
    let ids = req.params.id;
    if (!Array.isArray(ids)) {
        ids = [ids];
    }

    if (ids.length === 0) {
        return res.status(400).json({message: 'Yêu cầu không hợp lệ: cần một hoặc nhiều ID.'});
    }

    try {
        const result = await deleteCrossCheckService(ids);
        res.status(200).json(result);
    } catch (error) {
        res.status(404).json({
            message: 'Bản ghi CrossCheck không tồn tại hoặc lỗi khi xóa: ' + error.message,
        });
    }
};
