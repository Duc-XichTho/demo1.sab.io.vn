import {
    createCardInputService, deleteCardInputService,
    getAllCardInputService,
    getCardInputByIdService,
    updateCardInputService
} from "../services/cardInputService.js";

export const createCardInputController = async (req, res) => {
    const data = req.body;
    try {
        const team = await createCardInputService(data);
        res.status(201).json(team);
    } catch (error) {
        res.status(500).json({message: 'Lỗi khi tạo bản ghi CardInput: ' + error.message});
    }
};

export const getCardInputByIdController = async (req, res) => {
    const { id } = req.params; 

    try {
        const team = await getCardInputByIdService(id);
        res.status(200).json(team);
    } catch (error) {
        res.status(404).json({message: 'Bản ghi CardInput không tồn tại: ' + error.message});
    }
};

export const getAllCardInputController = async (req, res) => {
    try {
        const teamList = await getAllCardInputService();
        res.status(200).json(teamList);
    } catch (error) {
        res.status(500).json({
            message: 'Lỗi khi lấy danh sách bản ghi CardInput: ' + error.message,
        });
    }
};

export const updateCardInputController = async (req, res) => {
    const data = req.body;
    try {
        const team = await updateCardInputService(data);
        res.status(200).json(team);
    } catch (error) {
        res.status(404).json({
            message: 'Bản ghi không tồn tại hoặc lỗi khi cập nhật: ' + error.message,
        });
    }
};

export const deleteCardInputController = async (req, res) => {
    let ids = req.params.id;
    if (!Array.isArray(ids)) {
        ids = [ids];
    }

    if (ids.length === 0) {
        return res.status(400).json({message: 'Yêu cầu không hợp lệ: cần một hoặc nhiều ID.'});
    }

    try {
        const result = await deleteCardInputService(ids);
        res.status(200).json(result);
    } catch (error) {
        res.status(404).json({
            message: 'Bản ghi CardInput không tồn tại hoặc lỗi khi xóa: ' + error.message,
        });
    }
};
