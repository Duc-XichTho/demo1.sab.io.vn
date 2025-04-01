import {
    createDataCRMService, deleteDataCRMService,
    getAllDataCRMService,
    getDataCRMByIdService,
    updateDataCRMService
} from "../services/dataCRMService.js";

export const createDataCRMController = async (req, res) => {
    const data = req.body;
    try {
        const team = await createDataCRMService(data);
        res.status(201).json(team);
    } catch (error) {
        res.status(500).json({message: 'Lỗi khi tạo bản ghi DataCRM: ' + error.message});
    }
};

export const getDataCRMByIdController = async (req, res) => {
    const { id } = req.params; 

    try {
        const team = await getDataCRMByIdService(id);
        res.status(200).json(team);
    } catch (error) {
        res.status(404).json({message: 'Bản ghi DataCRM không tồn tại: ' + error.message});
    }
};

export const getAllDataCRMController = async (req, res) => {
    try {
        const teamList = await getAllDataCRMService();
        res.status(200).json(teamList);
    } catch (error) {
        res.status(500).json({
            message: 'Lỗi khi lấy danh sách bản ghi DataCRM: ' + error.message,
        });
    }
};

export const updateDataCRMController = async (req, res) => {
    const data = req.body;
    try {
        const team = await updateDataCRMService(data);
        res.status(200).json(team);
    } catch (error) {
        res.status(404).json({
            message: 'Bản ghi không tồn tại hoặc lỗi khi cập nhật: ' + error.message,
        });
    }
};

export const deleteDataCRMController = async (req, res) => {
    let ids = req.params.id;
    if (!Array.isArray(ids)) {
        ids = [ids];
    }

    if (ids.length === 0) {
        return res.status(400).json({message: 'Yêu cầu không hợp lệ: cần một hoặc nhiều ID.'});
    }

    try {
        const result = await deleteDataCRMService(ids);
        res.status(200).json(result);
    } catch (error) {
        res.status(404).json({
            message: 'Bản ghi DataCRM không tồn tại hoặc lỗi khi xóa: ' + error.message,
        });
    }
};
