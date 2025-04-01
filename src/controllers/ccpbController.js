import {
    createCCPBService, deleteCCPBService,
    getAllCCPBService,
    getCCPBByIdService,
    updateCCPBService
} from "../services/ccpbService.js";

export const createCCPBController = async (req, res) => {
    const data = req.body;
    try {
        const team = await createCCPBService(data);
        res.status(201).json(team);
    } catch (error) {
        res.status(500).json({message: 'Lỗi khi tạo bản ghi CCPB: ' + error.message});
    }
};

export const getCCPBByIdController = async (req, res) => {
    const { id } = req.params; 

    try {
        const team = await getCCPBByIdService(id);
        res.status(200).json(team);
    } catch (error) {
        res.status(404).json({message: 'Bản ghi CCPB không tồn tại: ' + error.message});
    }
};

export const getAllCCPBController = async (req, res) => {
    try {
        const teamList = await getAllCCPBService();
        res.status(200).json(teamList);
    } catch (error) {
        res.status(500).json({
            message: 'Lỗi khi lấy danh sách bản ghi CCPB: ' + error.message,
        });
    }
};

export const updateCCPBController = async (req, res) => {
    const data = req.body;
    try {
        const team = await updateCCPBService(data);
        res.status(200).json(team);
    } catch (error) {
        res.status(404).json({
            message: 'Bản ghi không tồn tại hoặc lỗi khi cập nhật: ' + error.message,
        });
    }
};

export const deleteCCPBController = async (req, res) => {
    let ids = req.params.id;
    if (!Array.isArray(ids)) {
        ids = [ids];
    }

    if (ids.length === 0) {
        return res.status(400).json({message: 'Yêu cầu không hợp lệ: cần một hoặc nhiều ID.'});
    }

    try {
        const result = await deleteCCPBService(ids);
        res.status(200).json(result);
    } catch (error) {
        res.status(404).json({
            message: 'Bản ghi CCPB không tồn tại hoặc lỗi khi xóa: ' + error.message,
        });
    }
};
