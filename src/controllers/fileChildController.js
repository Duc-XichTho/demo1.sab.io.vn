import {
    createFileChildService, deleteFileChildService,
    getFileChildService,
    getFileChildByIdService,
    updateFileChildService
} from "../services/fileChildService.js";

export const createFileChildController = async (req, res) => {
    const data = req.body;
    try {
        const team = await createFileChildService(data);
        res.status(201).json(team);
    } catch (error) {
        res.status(500).json({message: 'Lỗi khi tạo bản ghi FileChild: ' + error.message});
    }
};

export const getFileChildByIdController = async (req, res) => {
    const { id } = req.params; 

    try {
        const team = await getFileChildByIdService(id);
        res.status(200).json(team);
    } catch (error) {
        res.status(404).json({message: 'Bản ghi FileChild không tồn tại: ' + error.message});
    }
};

export const getAllFileChildController = async (req, res) => {
    try {
        const teamList = await getFileChildService();
        res.status(200).json(teamList);
    } catch (error) {
        res.status(500).json({
            message: 'Lỗi khi lấy danh sách bản ghi FileChild: ' + error.message,
        });
    }
};

export const updateFileChildController = async (req, res) => {
    const data = req.body;
    try {
        const team = await updateFileChildService(data);
        res.status(200).json(team);
    } catch (error) {
        res.status(404).json({
            message: 'Bản ghi không tồn tại hoặc lỗi khi cập nhật: ' + error.message,
        });
    }
};

export const deleteFileChildController = async (req, res) => {
    let ids = req.params.id;
    if (!Array.isArray(ids)) {
        ids = [ids];
    }

    if (ids.length === 0) {
        return res.status(400).json({message: 'Yêu cầu không hợp lệ: cần một hoặc nhiều ID.'});
    }

    try {
        const result = await deleteFileChildService(ids);
        res.status(200).json(result);
    } catch (error) {
        res.status(404).json({
            message: 'Bản ghi FileChild không tồn tại hoặc lỗi khi xóa: ' + error.message,
        });
    }
};
