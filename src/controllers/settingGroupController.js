import {
    createSettingGroupService, deleteSettingGroupService,
    getAllSettingGroupService,
    getSettingGroupByIdService,
    updateSettingGroupService
} from "../services/settingGroupService.js";

export const createSettingGroupController = async (req, res) => {
    const data = req.body;
    try {
        const team = await createSettingGroupService(data);
        res.status(201).json(team);
    } catch (error) {
        res.status(500).json({message: 'Lỗi khi tạo bản ghi SettingGroup: ' + error.message});
    }
};

export const getSettingGroupByIdController = async (req, res) => {
    const { id } = req.params; 

    try {
        const team = await getSettingGroupByIdService(id);
        res.status(200).json(team);
    } catch (error) {
        res.status(404).json({message: 'Bản ghi SettingGroup không tồn tại: ' + error.message});
    }
};

export const getAllSettingGroupController = async (req, res) => {
    try {
        const teamList = await getAllSettingGroupService();
        res.status(200).json(teamList);
    } catch (error) {
        res.status(500).json({
            message: 'Lỗi khi lấy danh sách bản ghi SettingGroup: ' + error.message,
        });
    }
};

export const updateSettingGroupController = async (req, res) => {
    const data = req.body;
    try {
        const team = await updateSettingGroupService(data);
        res.status(200).json(team);
    } catch (error) {
        res.status(404).json({
            message: 'Bản ghi không tồn tại hoặc lỗi khi cập nhật: ' + error.message,
        });
    }
};

export const deleteSettingGroupController = async (req, res) => {
    let ids = req.params.id;
    if (!Array.isArray(ids)) {
        ids = [ids];
    }

    if (ids.length === 0) {
        return res.status(400).json({message: 'Yêu cầu không hợp lệ: cần một hoặc nhiều ID.'});
    }

    try {
        const result = await deleteSettingGroupService(ids);
        res.status(200).json(result);
    } catch (error) {
        res.status(404).json({
            message: 'Bản ghi SettingGroup không tồn tại hoặc lỗi khi xóa: ' + error.message,
        });
    }
};
