import {
    createThueService, deleteThueService,
    getAllThueService,
    getThueByIdService,
    updateThueService
} from "../services/thueService.js";

export const createThueController = async (req, res) => {
    const data = req.body;
    try {
        const team = await createThueService(data);
        res.status(201).json(team);
    } catch (error) {
        res.status(500).json({message: 'Lỗi khi tạo bản ghi Thue: ' + error.message});
    }
};

export const getThueByIdController = async (req, res) => {
    const { id } = req.params; 

    try {
        const team = await getThueByIdService(id);
        res.status(200).json(team);
    } catch (error) {
        res.status(404).json({message: 'Bản ghi Thue không tồn tại: ' + error.message});
    }
};

export const getAllThueController = async (req, res) => {
    try {
        const teamList = await getAllThueService();
        res.status(200).json(teamList);
    } catch (error) {
        res.status(500).json({
            message: 'Lỗi khi lấy danh sách bản ghi Thue: ' + error.message,
        });
    }
};

export const updateThueController = async (req, res) => {
    const data = req.body;
    try {
        const team = await updateThueService(data);
        res.status(200).json(team);
    } catch (error) {
        res.status(404).json({
            message: 'Bản ghi không tồn tại hoặc lỗi khi cập nhật: ' + error.message,
        });
    }
};

export const deleteThueController = async (req, res) => {
    let ids = req.params.id;
    if (!Array.isArray(ids)) {
        ids = [ids];
    }

    if (ids.length === 0) {
        return res.status(400).json({message: 'Yêu cầu không hợp lệ: cần một hoặc nhiều ID.'});
    }

    try {
        const result = await deleteThueService(ids);
        res.status(200).json(result);
    } catch (error) {
        res.status(404).json({
            message: 'Bản ghi Thue không tồn tại hoặc lỗi khi xóa: ' + error.message,
        });
    }
};
