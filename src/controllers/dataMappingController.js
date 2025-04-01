import {
    createDataMappingService, deleteDataMappingService,
    getAllDataMappingService,
    getDataMappingByIdService,
    updateDataMappingService
} from "../services/dataMappingService.js";

export const createDataMappingController = async (req, res) => {
    const data = req.body;
    try {
        const team = await createDataMappingService(data);
        res.status(201).json(team);
    } catch (error) {
        res.status(500).json({message: 'Lỗi khi tạo bản ghi DataMapping: ' + error.message});
    }
};

export const getDataMappingByIdController = async (req, res) => {
    const { id } = req.params; 

    try {
        const team = await getDataMappingByIdService(id);
        res.status(200).json(team);
    } catch (error) {
        res.status(404).json({message: 'Bản ghi DataMapping không tồn tại: ' + error.message});
    }
};

export const getAllDataMappingController = async (req, res) => {
    try {
        const teamList = await getAllDataMappingService();
        res.status(200).json(teamList);
    } catch (error) {
        res.status(500).json({
            message: 'Lỗi khi lấy danh sách bản ghi DataMapping: ' + error.message,
        });
    }
};

export const updateDataMappingController = async (req, res) => {
    const data = req.body;
    try {
        const team = await updateDataMappingService(data);
        res.status(200).json(team);
    } catch (error) {
        res.status(404).json({
            message: 'Bản ghi không tồn tại hoặc lỗi khi cập nhật: ' + error.message,
        });
    }
};

export const deleteDataMappingController = async (req, res) => {
    let ids = req.params.id;
    if (!Array.isArray(ids)) {
        ids = [ids];
    }

    if (ids.length === 0) {
        return res.status(400).json({message: 'Yêu cầu không hợp lệ: cần một hoặc nhiều ID.'});
    }

    try {
        const result = await deleteDataMappingService(ids);
        res.status(200).json(result);
    } catch (error) {
        res.status(404).json({
            message: 'Bản ghi DataMapping không tồn tại hoặc lỗi khi xóa: ' + error.message,
        });
    }
};
