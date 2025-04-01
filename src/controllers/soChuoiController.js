import {
    createSoChuoiService, deleteSoChuoiService,
    getAllSoChuoiService,
    getSoChuoiByIdService,
    updateSoChuoiService
} from "../services/soChuoiService.js";

export const createSoChuoiController = async (req, res) => {
    const data = req.body;
    try {
        const team = await createSoChuoiService(data);
        res.status(201).json(team);
    } catch (error) {
        res.status(500).json({message: 'Lỗi khi tạo bản ghi SoChuoi: ' + error.message});
    }
};

export const getSoChuoiByIdController = async (req, res) => {
    const { id } = req.params; 

    try {
        const team = await getSoChuoiByIdService(id);
        res.status(200).json(team);
    } catch (error) {
        res.status(404).json({message: 'Bản ghi SoChuoi không tồn tại: ' + error.message});
    }
};

export const getAllSoChuoiController = async (req, res) => {
    try {
        const teamList = await getAllSoChuoiService();
        res.status(200).json(teamList);
    } catch (error) {
        res.status(500).json({
            message: 'Lỗi khi lấy danh sách bản ghi SoChuoi: ' + error.message,
        });
    }
};

export const updateSoChuoiController = async (req, res) => {
    const data = req.body;
    try {
        const team = await updateSoChuoiService(data);
        res.status(200).json(team);
    } catch (error) {
        res.status(404).json({
            message: 'Bản ghi không tồn tại hoặc lỗi khi cập nhật: ' + error.message,
        });
    }
};

export const deleteSoChuoiController = async (req, res) => {
    let ids = req.params.id;
    if (!Array.isArray(ids)) {
        ids = [ids];
    }

    if (ids.length === 0) {
        return res.status(400).json({message: 'Yêu cầu không hợp lệ: cần một hoặc nhiều ID.'});
    }

    try {
        const result = await deleteSoChuoiService(ids);
        res.status(200).json(result);
    } catch (error) {
        res.status(404).json({
            message: 'Bản ghi SoChuoi không tồn tại hoặc lỗi khi xóa: ' + error.message,
        });
    }
};
