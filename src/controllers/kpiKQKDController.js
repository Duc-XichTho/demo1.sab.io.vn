import {
    createKpiKQKDService, deleteKpiKQKDService,
    getAllKpiKQKDService,
    getKpiKQKDByIdService,
    updateKpiKQKDService
} from "../services/kpiKQKDService.js";

export const createKpiKQKDController = async (req, res) => {
    const data = req.body;
    try {
        const team = await createKpiKQKDService(data);
        res.status(201).json(team);
    } catch (error) {
        res.status(500).json({message: 'Lỗi khi tạo bản ghi KpiKQKD: ' + error.message});
    }
};

export const getKpiKQKDByIdController = async (req, res) => {
    const { id } = req.params; 

    try {
        const team = await getKpiKQKDByIdService(id);
        res.status(200).json(team);
    } catch (error) {
        res.status(404).json({message: 'Bản ghi KpiKQKD không tồn tại: ' + error.message});
    }
};

export const getAllKpiKQKDController = async (req, res) => {
    try {
        const teamList = await getAllKpiKQKDService();
        res.status(200).json(teamList);
    } catch (error) {
        res.status(500).json({
            message: 'Lỗi khi lấy danh sách bản ghi KpiKQKD: ' + error.message,
        });
    }
};

export const updateKpiKQKDController = async (req, res) => {
    const data = req.body;
    try {
        const team = await updateKpiKQKDService(data);
        res.status(200).json(team);
    } catch (error) {
        res.status(404).json({
            message: 'Bản ghi không tồn tại hoặc lỗi khi cập nhật: ' + error.message,
        });
    }
};

export const deleteKpiKQKDController = async (req, res) => {
    let ids = req.params.id;
    if (!Array.isArray(ids)) {
        ids = [ids];
    }

    if (ids.length === 0) {
        return res.status(400).json({message: 'Yêu cầu không hợp lệ: cần một hoặc nhiều ID.'});
    }

    try {
        const result = await deleteKpiKQKDService(ids);
        res.status(200).json(result);
    } catch (error) {
        res.status(404).json({
            message: 'Bản ghi KpiKQKD không tồn tại hoặc lỗi khi xóa: ' + error.message,
        });
    }
};
