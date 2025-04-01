import {
    getAllStepByTemplateIdService,
    getAllStepByCardIdService,
    createStepService,
    getAllStepService,
    getStepByIdService,
    updateStepService,
    deleteStepService
} from "../services/stepService.js";

export const getAllStepByCardIdController = async (req, res) => {
    const { cardId } = req.params;
    try {
        const data = await getAllStepByCardIdService(cardId);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({
            message: 'Lỗi khi lấy danh sách bản ghi Step: ' + error.message,
        });
    }
};

export const getAllStepByTemplateIdController = async (req, res) => {
    const { templateId } = req.params;
    try {
        const data = await getAllStepByTemplateIdService(templateId);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({
            message: 'Lỗi khi lấy danh sách bản ghi Step: ' + error.message,
        });
    }
}

export const createStepController = async (req, res) => {
    const data = req.body;
    try {
        const team = await createStepService(data);
        res.status(201).json(team);
    } catch (error) {
        res.status(500).json({ message: 'Lỗi khi tạo bản ghi Step: ' + error.message });
    }
};

export const getStepByIdController = async (req, res) => {
    const { id } = req.params;

    try {
        const team = await getStepByIdService(id);
        res.status(200).json(team);
    } catch (error) {
        res.status(404).json({ message: 'Bản ghi Step không tồn tại: ' + error.message });
    }
};

export const getAllStepController = async (req, res) => {
    try {
        const teamList = await getAllStepService();
        res.status(200).json(teamList);
    } catch (error) {
        res.status(500).json({
            message: 'Lỗi khi lấy danh sách bản ghi Step: ' + error.message,
        });
    }
};

export const updateStepController = async (req, res) => {
    const data = req.body;
    try {
        const team = await updateStepService(data);
        res.status(200).json(team);
    } catch (error) {
        res.status(404).json({
            message: 'Bản ghi không tồn tại hoặc lỗi khi cập nhật: ' + error.message,
        });
    }
};

export const deleteStepController = async (req, res) => {
    let ids = req.params.id;
    if (!Array.isArray(ids)) {
        ids = [ids];
    }

    if (ids.length === 0) {
        return res.status(400).json({ message: 'Yêu cầu không hợp lệ: cần một hoặc nhiều ID.' });
    }

    try {
        const result = await deleteStepService(ids);
        res.status(200).json(result);
    } catch (error) {
        res.status(404).json({
            message: 'Bản ghi Step không tồn tại hoặc lỗi khi xóa: ' + error.message,
        });
    }
};
