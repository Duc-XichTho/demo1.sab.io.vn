import {
    createTagService, deleteTagService,
    getAllTagService,
    getTagByIdService,
    updateTagService
} from "../services/tagService.js";

export const createTagController = async (req, res) => {
    const data = req.body;
    try {
        const team = await createTagService(data);
        res.status(201).json(team);
    } catch (error) {
        res.status(500).json({message: 'Lỗi khi tạo bản ghi Tag: ' + error.message});
    }
};

export const getTagByIdController = async (req, res) => {
    const { id } = req.params; 

    try {
        const team = await getTagByIdService(id);
        res.status(200).json(team);
    } catch (error) {
        res.status(404).json({message: 'Bản ghi Tag không tồn tại: ' + error.message});
    }
};

export const getAllTagController = async (req, res) => {
    try {
        const teamList = await getAllTagService();
        res.status(200).json(teamList);
    } catch (error) {
        res.status(500).json({
            message: 'Lỗi khi lấy danh sách bản ghi Tag: ' + error.message,
        });
    }
};

export const updateTagController = async (req, res) => {
    const data = req.body;
    try {
        const team = await updateTagService(data);
        res.status(200).json(team);
    } catch (error) {
        res.status(404).json({
            message: 'Bản ghi không tồn tại hoặc lỗi khi cập nhật: ' + error.message,
        });
    }
};

export const deleteTagController = async (req, res) => {
    let ids = req.params.id;
    if (!Array.isArray(ids)) {
        ids = [ids];
    }

    if (ids.length === 0) {
        return res.status(400).json({message: 'Yêu cầu không hợp lệ: cần một hoặc nhiều ID.'});
    }

    try {
        const result = await deleteTagService(ids);
        res.status(200).json(result);
    } catch (error) {
        res.status(404).json({
            message: 'Bản ghi Tag không tồn tại hoặc lỗi khi xóa: ' + error.message,
        });
    }
};
