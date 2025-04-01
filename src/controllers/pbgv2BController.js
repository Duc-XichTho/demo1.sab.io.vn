import {
    createPBGV2BService,
    deletePBGV2BService,
    getAllPBGV2BService,
    getPBGV2BByIdService,
    updatePBGV2BService
} from "../services/pbgv2BService.js";

export const createPBGV2BController = async (req, res) => {
    const data = req.body;
    try {
        const team = await createPBGV2BService(data);
        res.status(201).json(team);
    } catch (error) {
        res.status(500).json({message: 'Lỗi khi tạo bản ghi PBGV2B: ' + error.message});
    }
};

export const getPBGV2BByIdController = async (req, res) => {
    const {id} = req.params;

    try {
        const team = await getPBGV2BByIdService(id);
        res.status(200).json(team);
    } catch (error) {
        res.status(404).json({message: 'Bản ghi PBGV2B không tồn tại: ' + error.message});
    }
};

export const getAllPBGV2BController = async (req, res) => {
    try {
        const teamList = await getAllPBGV2BService();
        res.status(200).json(teamList);
    } catch (error) {
        res.status(500).json({
            message: 'Lỗi khi lấy danh sách bản ghi PBGV2B: ' + error.message,
        });
    }
};

export const updatePBGV2BController = async (req, res) => {
    const data = req.body;
    try {
        const team = await updatePBGV2BService(data);
        res.status(200).json(team);
    } catch (error) {
        res.status(404).json({
            message: 'Bản ghi không tồn tại hoặc lỗi khi cập nhật: ' + error.message,
        });
    }
};

export const deletePBGV2BController = async (req, res) => {
    let ids = req.params.id;
    if (!Array.isArray(ids)) {
        ids = [ids];
    }

    if (ids.length === 0) {
        return res.status(400).json({message: 'Yêu cầu không hợp lệ: cần một hoặc nhiều ID.'});
    }

    try {
        const result = await deletePBGV2BService(ids);
        res.status(200).json(result);
    } catch (error) {
        res.status(404).json({
            message: 'Bản ghi PBGV2B không tồn tại hoặc lỗi khi xóa: ' + error.message,
        });
    }
};
