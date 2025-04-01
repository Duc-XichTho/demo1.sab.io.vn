import {
    getAllChainTemplateStepSubStepService,
    createChainService, deleteChainService,
    getAllChainService,
    getChainByIdService,
    updateChainService,
} from '../services/chainService2.js';

export const getAllChainTemplateStepSubStepController = async (req, res) => {
    try {
        const result = await getAllChainTemplateStepSubStepService();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({
            message: 'Lỗi khi lấy danh sách bản ghi Chain: ' + error.message,
        });
    }
};

export const createChainController = async (req, res) => {
    const data = req.body;
    try {
        const team = await createChainService(data);
        res.status(201).json(team);
    } catch (error) {
        res.status(500).json({message: 'Lỗi khi tạo bản ghi Chain: ' + error.message});
    }
};

export const getChainByIdController = async (req, res) => {
    const { id } = req.params; 

    try {
        const team = await getChainByIdService(id);
        res.status(200).json(team);
    } catch (error) {
        res.status(404).json({message: 'Bản ghi Chain không tồn tại: ' + error.message});
    }
};

export const getAllChainController = async (req, res) => {
    try {
        const teamList = await getAllChainService();
        res.status(200).json(teamList);
    } catch (error) {
        res.status(500).json({
            message: 'Lỗi khi lấy danh sách bản ghi Chain: ' + error.message,
        });
    }
};

export const updateChainController = async (req, res) => {
    const data = req.body;
    try {
        const team = await updateChainService(data);
        res.status(200).json(team);
    } catch (error) {
        res.status(404).json({
            message: 'Bản ghi không tồn tại hoặc lỗi khi cập nhật: ' + error.message,
        });
    }
};

export const deleteChainController = async (req, res) => {
    let ids = req.params.id;
    if (!Array.isArray(ids)) {
        ids = [ids];
    }

    if (ids.length === 0) {
        return res.status(400).json({message: 'Yêu cầu không hợp lệ: cần một hoặc nhiều ID.'});
    }

    try {
        const result = await deleteChainService(ids);
        res.status(200).json(result);
    } catch (error) {
        res.status(404).json({
            message: 'Bản ghi Chain không tồn tại hoặc lỗi khi xóa: ' + error.message,
        });
    }
};
