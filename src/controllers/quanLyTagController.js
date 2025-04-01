import {
    createQuanLyTagService, deleteQuanLyTagService,
    getAllQuanLyTagService,
    getQuanLyTagByIdService,
    updateQuanLyTagService
} from "../services/quanlyTagService.js";

export const createQuanLyTagController = async (req, res) => {
    const data = req.body;
    try {
        const team = await createQuanLyTagService(data);
        res.status(201).json(team);
    } catch (error) {
        res.status(500).json({message: 'Lỗi khi tạo bản ghi QuanLyTag: ' + error.message});
    }
};

export const getQuanLyTagByIdController = async (req, res) => {
    const { id } = req.params; 

    try {
        const team = await getQuanLyTagByIdService(id);
        res.status(200).json(team);
    } catch (error) {
        res.status(404).json({message: 'Bản ghi QuanLyTag không tồn tại: ' + error.message});
    }
};

export const getAllQuanLyTagController = async (req, res) => {
    try {
        const teamList = await getAllQuanLyTagService();
        res.status(200).json(teamList);
    } catch (error) {
        res.status(500).json({
            message: 'Lỗi khi lấy danh sách bản ghi QuanLyTag: ' + error.message,
        });
    }
};

export const updateQuanLyTagController = async (req, res) => {
    const data = req.body;
    try {
        const team = await updateQuanLyTagService(data);
        res.status(200).json(team);
    } catch (error) {
        res.status(404).json({
            message: 'Bản ghi không tồn tại hoặc lỗi khi cập nhật: ' + error.message,
        });
    }
};

export const deleteQuanLyTagController = async (req, res) => {
    let ids = req.params.id;
    if (!Array.isArray(ids)) {
        ids = [ids];
    }

    if (ids.length === 0) {
        return res.status(400).json({message: 'Yêu cầu không hợp lệ: cần một hoặc nhiều ID.'});
    }

    try {
        const result = await deleteQuanLyTagService(ids);
        res.status(200).json(result);
    } catch (error) {
        res.status(404).json({
            message: 'Bản ghi QuanLyTag không tồn tại hoặc lỗi khi xóa: ' + error.message,
        });
    }
};
