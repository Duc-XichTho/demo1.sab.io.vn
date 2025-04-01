import {
    createMappingCardService, deleteMappingCardService,
    getAllMappingCardService,
    getMappingCardByIdService,
    updateMappingCardService
} from "../services/mappingCardService.js";

export const createMappingCardController = async (req, res) => {
    const data = req.body;
    try {
        const team = await createMappingCardService(data);
        res.status(201).json(team);
    } catch (error) {
        res.status(500).json({message: 'Lỗi khi tạo bản ghi MappingCard: ' + error.message});
    }
};

export const getMappingCardByIdController = async (req, res) => {
    const { id } = req.params; 

    try {
        const team = await getMappingCardByIdService(id);
        res.status(200).json(team);
    } catch (error) {
        res.status(404).json({message: 'Bản ghi MappingCard không tồn tại: ' + error.message});
    }
};

export const getAllMappingCardController = async (req, res) => {
    try {
        const teamList = await getAllMappingCardService();
        res.status(200).json(teamList);
    } catch (error) {
        res.status(500).json({
            message: 'Lỗi khi lấy danh sách bản ghi MappingCard: ' + error.message,
        });
    }
};

export const updateMappingCardController = async (req, res) => {
    const data = req.body;
    try {
        const team = await updateMappingCardService(data);
        res.status(200).json(team);
    } catch (error) {
        res.status(404).json({
            message: 'Bản ghi không tồn tại hoặc lỗi khi cập nhật: ' + error.message,
        });
    }
};

export const deleteMappingCardController = async (req, res) => {
    let ids = req.params.id;
    if (!Array.isArray(ids)) {
        ids = [ids];
    }

    if (ids.length === 0) {
        return res.status(400).json({message: 'Yêu cầu không hợp lệ: cần một hoặc nhiều ID.'});
    }

    try {
        const result = await deleteMappingCardService(ids);
        res.status(200).json(result);
    } catch (error) {
        res.status(404).json({
            message: 'Bản ghi MappingCard không tồn tại hoặc lỗi khi xóa: ' + error.message,
        });
    }
};
