import {
    getSettingByType,
    createSettingService,
    updateSettingService
} from "../services/settingService.js";

export const getSettingByTypeController = async (req, res) => {
    const { type } = req.params;
    try {
        const data = await getSettingByType(type);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: 'Lỗi khi lấy bản ghi Setting: ' + error.message });
    }
};

export const createSettingController = async (req, res) => {
    const data = req.body;
    try {
        const team = await createSettingService(data);
        res.status(201).json(team);
    } catch (error) {
        res.status(500).json({ message: 'Lỗi khi tạo bản ghi Setting: ' + error.message });
    }
};

export const updateSettingController = async (req, res) => {
    const data = req.body;
    try {
        const team = await updateSettingService(data);
        res.status(200).json(team);
    } catch (error) {
        res.status(500).json({ message: 'Lỗi khi cập nhật bản ghi Setting: ' + error.message });
    }
};