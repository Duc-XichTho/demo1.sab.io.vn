import {
    createBusinessUnitService, deleteBusinessUnitService,
    getAllBusinessUnitService,
    getBusinessUnitByIdService,
    updateBusinessUnitService
} from "../services/businessUnitService.js";

export const createBusinessUnitController = async (req, res) => {
    const data = req.body;
    try {
        const team = await createBusinessUnitService(data);
        res.status(201).json(team);
    } catch (error) {
        res.status(500).json({message: 'Lỗi khi tạo bản ghi BusinessUnit: ' + error.message});
    }
};

export const getBusinessUnitByIdController = async (req, res) => {
    const { id } = req.params; 

    try {
        const team = await getBusinessUnitByIdService(id);
        res.status(200).json(team);
    } catch (error) {
        res.status(404).json({message: 'Bản ghi BusinessUnit không tồn tại: ' + error.message});
    }
};

export const getAllBusinessUnitController = async (req, res) => {
    try {
        const teamList = await getAllBusinessUnitService();
        res.status(200).json(teamList);
    } catch (error) {
        res.status(500).json({
            message: 'Lỗi khi lấy danh sách bản ghi BusinessUnit: ' + error.message,
        });
    }
};

export const updateBusinessUnitController = async (req, res) => {
    const data = req.body;
    try {
        const team = await updateBusinessUnitService(data);
        res.status(200).json(team);
    } catch (error) {
        res.status(404).json({
            message: 'Bản ghi không tồn tại hoặc lỗi khi cập nhật: ' + error.message,
        });
    }
};

export const deleteBusinessUnitController = async (req, res) => {
    let ids = req.params.id;
    if (!Array.isArray(ids)) {
        ids = [ids];
    }

    if (ids.length === 0) {
        return res.status(400).json({message: 'Yêu cầu không hợp lệ: cần một hoặc nhiều ID.'});
    }

    try {
        const result = await deleteBusinessUnitService(ids);
        res.status(200).json(result);
    } catch (error) {
        res.status(404).json({
            message: 'Bản ghi BusinessUnit không tồn tại hoặc lỗi khi xóa: ' + error.message,
        });
    }
};
