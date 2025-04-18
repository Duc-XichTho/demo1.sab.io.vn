import {
    createStoryWebPageService, deleteStoryWebPageService,
    getAllStoryWebPageService,
    getStoryWebPageByIdService, getStoryWebPageByIdWebPageService,
    updateStoryWebPageService
} from "../services/storyWebPageService.js";

export const createStoryWebPageController = async (req, res) => {
    const data = req.body;
    try {
        const team = await createStoryWebPageService(data);
        res.status(201).json(team);
    } catch (error) {
        res.status(500).json({message: 'Lỗi khi tạo bản ghi StoryWebPage: ' + error.message});
    }
};

export const getStoryWebPageByIdController = async (req, res) => {
    const { id } = req.params; 

    try {
        const team = await getStoryWebPageByIdService(id);
        res.status(200).json(team);
    } catch (error) {
        res.status(404).json({message: 'Bản ghi StoryWebPage không tồn tại: ' + error.message});
    }
};

export const getStoryWebPageByIdWebPageController = async (req, res) => {
    const { id } = req.params;

    try {
        const team = await getStoryWebPageByIdWebPageService(id);
        res.status(200).json(team);
    } catch (error) {
        res.status(404).json({message: 'Bản ghi StoryWebPage không tồn tại: ' + error.message});
    }
};

export const getAllStoryWebPageController = async (req, res) => {
    try {
        const teamList = await getAllStoryWebPageService();
        res.status(200).json(teamList);
    } catch (error) {
        res.status(500).json({
            message: 'Lỗi khi lấy danh sách bản ghi StoryWebPage: ' + error.message,
        });
    }
};

export const updateStoryWebPageController = async (req, res) => {
    const data = req.body;
    try {
        const team = await updateStoryWebPageService(data);
        res.status(200).json(team);
    } catch (error) {
        res.status(404).json({
            message: 'Bản ghi không tồn tại hoặc lỗi khi cập nhật: ' + error.message,
        });
    }
};

export const deleteStoryWebPageController = async (req, res) => {
    let ids = req.params.id;
    if (!Array.isArray(ids)) {
        ids = [ids];
    }

    if (ids.length === 0) {
        return res.status(400).json({message: 'Yêu cầu không hợp lệ: cần một hoặc nhiều ID.'});
    }

    try {
        const result = await deleteStoryWebPageService(ids);
        res.status(200).json(result);
    } catch (error) {
        res.status(404).json({
            message: 'Bản ghi StoryWebPage không tồn tại hoặc lỗi khi xóa: ' + error.message,
        });
    }
};
