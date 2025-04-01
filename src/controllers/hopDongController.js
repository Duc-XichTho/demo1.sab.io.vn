import {
    createHopDongService, deleteHopDongService,
    getAllHopDongService,
    getHopDongByIdService,
    updateHopDongService
} from "../services/hopDongService.js";

export const createHopDongController = async (req, res) => {
    const data = req.body;
    try {
        const team = await createHopDongService(data);
        res.status(201).json(team);
    } catch (error) {
        res.status(500).json({message: 'Lỗi khi tạo bản ghi HopDong: ' + error.message});
    }
};

export const getHopDongByIdController = async (req, res) => {
    const { id } = req.params; 

    try {
        const team = await getHopDongByIdService(id);
        res.status(200).json(team);
    } catch (error) {
        res.status(404).json({message: 'Bản ghi HopDong không tồn tại: ' + error.message});
    }
};

export const getAllHopDongController = async (req, res) => {
    try {
        const teamList = await getAllHopDongService();
        res.status(200).json(teamList);
    } catch (error) {
        res.status(500).json({
            message: 'Lỗi khi lấy danh sách bản ghi HopDong: ' + error.message,
        });
    }
};

export const updateHopDongController = async (req, res) => {
    const data = req.body;
    try {
        const team = await updateHopDongService(data);
        res.status(200).json(team);
    } catch (error) {
        res.status(404).json({
            message: 'Bản ghi không tồn tại hoặc lỗi khi cập nhật: ' + error.message,
        });
    }
};

export const deleteHopDongController = async (req, res) => {
    let ids = req.params.id;
    if (!Array.isArray(ids)) {
        ids = [ids];
    }

    if (ids.length === 0) {
        return res.status(400).json({message: 'Yêu cầu không hợp lệ: cần một hoặc nhiều ID.'});
    }

    try {
        const result = await deleteHopDongService(ids);
        res.status(200).json(result);
    } catch (error) {
        res.status(404).json({
            message: 'Bản ghi HopDong không tồn tại hoặc lỗi khi xóa: ' + error.message,
        });
    }
};
