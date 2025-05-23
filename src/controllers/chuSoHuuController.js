import {
    createChuSoHuuService, deleteChuSoHuuService,
    getAllChuSoHuuService,
    getChuSoHuuByIdService,
    updateChuSoHuuService
} from "../services/chuSoHuuService.js";

export const createChuSoHuuController = async (req, res) => {
    const data = req.body;
    try {
        const team = await createChuSoHuuService(data);
        res.status(201).json(team);
    } catch (error) {
        res.status(500).json({message: 'Lỗi khi tạo bản ghi ChuSoHuu: ' + error.message});
    }
};

export const getChuSoHuuByIdController = async (req, res) => {
    const { id } = req.params; 

    try {
        const team = await getChuSoHuuByIdService(id);
        res.status(200).json(team);
    } catch (error) {
        res.status(404).json({message: 'Bản ghi ChuSoHuu không tồn tại: ' + error.message});
    }
};

export const getAllChuSoHuuController = async (req, res) => {
    try {
        const teamList = await getAllChuSoHuuService();
        res.status(200).json(teamList);
    } catch (error) {
        res.status(500).json({
            message: 'Lỗi khi lấy danh sách bản ghi ChuSoHuu: ' + error.message,
        });
    }
};

export const updateChuSoHuuController = async (req, res) => {
    const data = req.body;
    try {
        const team = await updateChuSoHuuService(data);
        res.status(200).json(team);
    } catch (error) {
        res.status(404).json({
            message: 'Bản ghi không tồn tại hoặc lỗi khi cập nhật: ' + error.message,
        });
    }
};

export const deleteChuSoHuuController = async (req, res) => {
    let ids = req.params.id;
    if (!Array.isArray(ids)) {
        ids = [ids];
    }

    if (ids.length === 0) {
        return res.status(400).json({message: 'Yêu cầu không hợp lệ: cần một hoặc nhiều ID.'});
    }

    try {
        const result = await deleteChuSoHuuService(ids);
        res.status(200).json(result);
    } catch (error) {
        res.status(404).json({
            message: 'Bản ghi ChuSoHuu không tồn tại hoặc lỗi khi xóa: ' + error.message,
        });
    }
};
