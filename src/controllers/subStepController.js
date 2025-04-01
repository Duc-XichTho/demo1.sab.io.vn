import {
    createSubStepService, deleteSubStepService,
    getAllSubStepService,
    getSubStepByIdService,
    updateSubStepService
} from "../services/subStepService.js";

export const createSubStepController = async (req, res) => {
    const data = req.body;
    try {
        const team = await createSubStepService(data);
        res.status(201).json(team);
    } catch (error) {
        res.status(500).json({message: 'Lỗi khi tạo bản ghi SubStep: ' + error.message});
    }
};

export const getSubStepByIdController = async (req, res) => {
    const { id } = req.params; 

    try {
        const team = await getSubStepByIdService(id);
        res.status(200).json(team);
    } catch (error) {
        res.status(404).json({message: 'Bản ghi SubStep không tồn tại: ' + error.message});
    }
};

export const getAllSubStepController = async (req, res) => {
    try {
        const teamList = await getAllSubStepService();
        res.status(200).json(teamList);
    } catch (error) {
        res.status(500).json({
            message: 'Lỗi khi lấy danh sách bản ghi SubStep: ' + error.message,
        });
    }
};

export const updateSubStepController = async (req, res) => {
    const data = req.body;
    try {
        const team = await updateSubStepService(data);
        res.status(200).json(team);
    } catch (error) {
        res.status(404).json({
            message: 'Bản ghi không tồn tại hoặc lỗi khi cập nhật: ' + error.message,
        });
    }
};

export const deleteSubStepController = async (req, res) => {
    let ids = req.params.id;
    if (!Array.isArray(ids)) {
        ids = [ids];
    }

    if (ids.length === 0) {
        return res.status(400).json({message: 'Yêu cầu không hợp lệ: cần một hoặc nhiều ID.'});
    }

    try {
        const result = await deleteSubStepService(ids);
        res.status(200).json(result);
    } catch (error) {
        res.status(404).json({
            message: 'Bản ghi SubStep không tồn tại hoặc lỗi khi xóa: ' + error.message,
        });
    }
};
