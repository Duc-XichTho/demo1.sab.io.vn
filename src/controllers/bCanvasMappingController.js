import {
    createBCanvasMappingService, deleteBCanvasMappingService,
    getAllBCanvasMappingService,
    getBCanvasMappingByIdService,
    updateBCanvasMappingService
} from "../services/bCanvasMappingService.js";

export const createBCanvasMappingController = async (req, res) => {
    const data = req.body;
    try {
        const team = await createBCanvasMappingService(data);
        res.status(201).json(team);
    } catch (error) {
        res.status(500).json({message: 'Lỗi khi tạo bản ghi BCanvasMapping: ' + error.message});
    }
};

export const getBCanvasMappingByIdController = async (req, res) => {
    const { id } = req.params; 

    try {
        const team = await getBCanvasMappingByIdService(id);
        res.status(200).json(team);
    } catch (error) {
        res.status(404).json({message: 'Bản ghi BCanvasMapping không tồn tại: ' + error.message});
    }
};

export const getAllBCanvasMappingController = async (req, res) => {
    try {
        const teamList = await getAllBCanvasMappingService();
        res.status(200).json(teamList);
    } catch (error) {
        res.status(500).json({
            message: 'Lỗi khi lấy danh sách bản ghi BCanvasMapping: ' + error.message,
        });
    }
};

export const updateBCanvasMappingController = async (req, res) => {
    const data = req.body;
    try {
        const team = await updateBCanvasMappingService(data);
        res.status(200).json(team);
    } catch (error) {
        res.status(404).json({
            message: 'Bản ghi không tồn tại hoặc lỗi khi cập nhật: ' + error.message,
        });
    }
};

export const deleteBCanvasMappingController = async (req, res) => {
    let ids = req.params.id;
    if (!Array.isArray(ids)) {
        ids = [ids];
    }

    if (ids.length === 0) {
        return res.status(400).json({message: 'Yêu cầu không hợp lệ: cần một hoặc nhiều ID.'});
    }

    try {
        const result = await deleteBCanvasMappingService(ids);
        res.status(200).json(result);
    } catch (error) {
        res.status(404).json({
            message: 'Bản ghi BCanvasMapping không tồn tại hoặc lỗi khi xóa: ' + error.message,
        });
    }
};
