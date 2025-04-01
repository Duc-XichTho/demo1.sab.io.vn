import {
    createCauHinhService, deleteCauHinhService,
    getAllCauHinhService,
    getCauHinhByIdService,
    updateCauHinhService
} from "../services/cauHinhService.js";

export const createCauHinhController = async (req, res) => {
    const data = req.body;
    try {
        const team = await createCauHinhService(data);
        res.status(201).json(team);
    } catch (error) {
        res.status(500).json({message: 'Lỗi khi tạo bản ghi CauHinh: ' + error.message});
    }
};

export const getCauHinhByIdController = async (req, res) => {
    const { id } = req.params; 

    try {
        const team = await getCauHinhByIdService(id);
        res.status(200).json(team);
    } catch (error) {
        res.status(404).json({message: 'Bản ghi CauHinh không tồn tại: ' + error.message});
    }
};

export const getAllCauHinhController = async (req, res) => {
    try {
        const teamList = await getAllCauHinhService();
        res.status(200).json(teamList);
    } catch (error) {
        res.status(500).json({
            message: 'Lỗi khi lấy danh sách bản ghi CauHinh: ' + error.message,
        });
    }
};

export const updateCauHinhController = async (req, res) => {
    const data = req.body;
    try {
        const team = await updateCauHinhService(data);
        res.status(200).json(team);
    } catch (error) {
        res.status(404).json({
            message: 'Bản ghi không tồn tại hoặc lỗi khi cập nhật: ' + error.message,
        });
    }
};

export const deleteCauHinhController = async (req, res) => {
    let ids = req.params.id;
    if (!Array.isArray(ids)) {
        ids = [ids];
    }

    if (ids.length === 0) {
        return res.status(400).json({message: 'Yêu cầu không hợp lệ: cần một hoặc nhiều ID.'});
    }

    try {
        const result = await deleteCauHinhService(ids);
        res.status(200).json(result);
    } catch (error) {
        res.status(404).json({
            message: 'Bản ghi CauHinh không tồn tại hoặc lỗi khi xóa: ' + error.message,
        });
    }
};
