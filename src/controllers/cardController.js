import {
    getAllStepFromCardService,
    createCardService,
    deleteCardService,
    getAllCardService,
    getCardByIdService,
    updateCardService
} from "../services/cardService.js";

export const getAllStepFromCardController = async (req, res) => {
    try {
        const data = await getAllStepFromCardService();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({
            message: 'Lỗi khi lấy danh sách bản ghi: ' + error.message,
        });
    }
}

export const createCardController = async (req, res) => {
    const data = req.body;
    try {
        const team = await createCardService(data);
        res.status(201).json(team);
    } catch (error) {
        res.status(500).json({ message: 'Lỗi khi tạo bản ghi Card: ' + error.message });
    }
};

export const getCardByIdController = async (req, res) => {
    const { id } = req.params;

    try {
        const team = await getCardByIdService(id);
        res.status(200).json(team);
    } catch (error) {
        res.status(404).json({ message: 'Bản ghi Card không tồn tại: ' + error.message });
    }
};

export const getAllCardController = async (req, res) => {
    try {
        const teamList = await getAllCardService();
        res.status(200).json(teamList);
    } catch (error) {
        res.status(500).json({
            message: 'Lỗi khi lấy danh sách bản ghi Card: ' + error.message,
        });
    }
};

export const updateCardController = async (req, res) => {
    const data = req.body;
    try {
        const team = await updateCardService(data);
        res.status(200).json(team);
    } catch (error) {
        res.status(404).json({
            message: 'Bản ghi không tồn tại hoặc lỗi khi cập nhật: ' + error.message,
        });
    }
};

export const deleteCardController = async (req, res) => {
    let ids = req.params.id;
    if (!Array.isArray(ids)) {
        ids = [ids];
    }

    if (ids.length === 0) {
        return res.status(400).json({ message: 'Yêu cầu không hợp lệ: cần một hoặc nhiều ID.' });
    }

    try {
        const result = await deleteCardService(ids);
        res.status(200).json(result);
    } catch (error) {
        res.status(404).json({
            message: 'Bản ghi Card không tồn tại hoặc lỗi khi xóa: ' + error.message,
        });
    }
};
