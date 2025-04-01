import {
    createRuleSettingService, deleteRuleSettingService,
    getAllRuleSettingService,
    getRuleSettingByIdService,
    updateRuleSettingService
} from "../services/ruleSettingService.js";

export const createRuleSettingController = async (req, res) => {
    const data = req.body;
    try {
        const team = await createRuleSettingService(data);
        res.status(201).json(team);
    } catch (error) {
        res.status(500).json({message: 'Lỗi khi tạo bản ghi RuleSetting: ' + error.message});
    }
};

export const getRuleSettingByIdController = async (req, res) => {
    const { id } = req.params; 

    try {
        const team = await getRuleSettingByIdService(id);
        res.status(200).json(team);
    } catch (error) {
        res.status(404).json({message: 'Bản ghi RuleSetting không tồn tại: ' + error.message});
    }
};

export const getAllRuleSettingController = async (req, res) => {
    try {
        const teamList = await getAllRuleSettingService();
        res.status(200).json(teamList);
    } catch (error) {
        res.status(500).json({
            message: 'Lỗi khi lấy danh sách bản ghi RuleSetting: ' + error.message,
        });
    }
};

export const updateRuleSettingController = async (req, res) => {
    const data = req.body;
    try {
        const team = await updateRuleSettingService(data);
        res.status(200).json(team);
    } catch (error) {
        res.status(404).json({
            message: 'Bản ghi không tồn tại hoặc lỗi khi cập nhật: ' + error.message,
        });
    }
};

export const deleteRuleSettingController = async (req, res) => {
    let ids = req.params.id;
    if (!Array.isArray(ids)) {
        ids = [ids];
    }

    if (ids.length === 0) {
        return res.status(400).json({message: 'Yêu cầu không hợp lệ: cần một hoặc nhiều ID.'});
    }

    try {
        const result = await deleteRuleSettingService(ids);
        res.status(200).json(result);
    } catch (error) {
        res.status(404).json({
            message: 'Bản ghi RuleSetting không tồn tại hoặc lỗi khi xóa: ' + error.message,
        });
    }
};
