import {
    createWebPageService, deleteWebPageService,
    getAllWebPageService,
    getWebPageByIdService,
    updateWebPageService
} from "../services/webPageService.js";

export const createWebPageController = async (req, res) => {
    const data = req.body;
    try {
        const team = await createWebPageService(data);
        res.status(201).json(team);
    } catch (error) {
        res.status(500).json({message: 'Lỗi khi tạo bản ghi WebPage: ' + error.message});
    }
};

export const getWebPageByIdController = async (req, res) => {
    const { id } = req.params; 

    try {
        const team = await getWebPageByIdService(id);
        res.status(200).json(team);
    } catch (error) {
        res.status(404).json({message: 'Bản ghi WebPage không tồn tại: ' + error.message});
    }
};

export const getAllWebPageController = async (req, res) => {
    try {
        const teamList = await getAllWebPageService();
        res.status(200).json(teamList);
    } catch (error) {
        res.status(500).json({
            message: 'Lỗi khi lấy danh sách bản ghi WebPage: ' + error.message,
        });
    }
};

export const updateWebPageController = async (req, res) => {
    const data = req.body;
    try {
        const team = await updateWebPageService(data);
        res.status(200).json(team);
    } catch (error) {
        res.status(404).json({
            message: 'Bản ghi không tồn tại hoặc lỗi khi cập nhật: ' + error.message,
        });
    }
};

export const deleteWebPageController = async (req, res) => {
    let ids = req.params.id;
    if (!Array.isArray(ids)) {
        ids = [ids];
    }

    if (ids.length === 0) {
        return res.status(400).json({message: 'Yêu cầu không hợp lệ: cần một hoặc nhiều ID.'});
    }

    try {
        const result = await deleteWebPageService(ids);
        res.status(200).json(result);
    } catch (error) {
        res.status(404).json({
            message: 'Bản ghi WebPage không tồn tại hoặc lỗi khi xóa: ' + error.message,
        });
    }
};
