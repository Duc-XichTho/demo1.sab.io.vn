import {
    createPMVSettingKHService, deletePMVSettingKHService,
    getAllPMVSettingKHService,
    getPMVSettingKHByIdService,
    updatePMVSettingKHService
} from "../services/pmvSettingKHService.js";

export const createPMVSettingKHController = async (req, res) => {
    const data = req.body;
    try {
        const team = await createPMVSettingKHService(data);
        res.status(201).json(team);
    } catch (error) {
        res.status(500).json({message: 'Lỗi khi tạo bản ghi PMVSettingKH: ' + error.message});
    }
};

export const getPMVSettingKHByIdController = async (req, res) => {
    const { id } = req.params; 

    try {
        const team = await getPMVSettingKHByIdService(id);
        res.status(200).json(team);
    } catch (error) {
        res.status(404).json({message: 'Bản ghi PMVSettingKH không tồn tại: ' + error.message});
    }
};

export const getAllPMVSettingKHController = async (req, res) => {
    try {
        const teamList = await getAllPMVSettingKHService();
        res.status(200).json(teamList);
    } catch (error) {
        res.status(500).json({
            message: 'Lỗi khi lấy danh sách bản ghi PMVSettingKH: ' + error.message,
        });
    }
};

export const updatePMVSettingKHController = async (req, res) => {
    const data = req.body;
    try {
        const team = await updatePMVSettingKHService(data);
        res.status(200).json(team);
    } catch (error) {
        res.status(404).json({
            message: 'Bản ghi không tồn tại hoặc lỗi khi cập nhật: ' + error.message,
        });
    }
};

export const deletePMVSettingKHController = async (req, res) => {
    let ids = req.params.id;
    if (!Array.isArray(ids)) {
        ids = [ids];
    }

    if (ids.length === 0) {
        return res.status(400).json({message: 'Yêu cầu không hợp lệ: cần một hoặc nhiều ID.'});
    }

    try {
        const result = await deletePMVSettingKHService(ids);
        res.status(200).json(result);
    } catch (error) {
        res.status(404).json({
            message: 'Bản ghi PMVSettingKH không tồn tại hoặc lỗi khi xóa: ' + error.message,
        });
    }
};
