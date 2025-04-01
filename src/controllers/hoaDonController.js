import {
    createHoaDonService, deleteHoaDonService,
    getAllHoaDonService,
    getAllHoaDonReminder,
    getHoaDonByIdService,
    updateHoaDonService, getHoaDonByCardIdService
} from "../services/hoaDonService.js";

export const createHoaDonController = async (req, res) => {
    const data = req.body;
    try {
        const team = await createHoaDonService(data);
        res.status(201).json(team);
    } catch (error) {
        res.status(500).json({ message: 'Lỗi khi tạo bản ghi HoaDon: ' + error.message });
    }
};

export const getHoaDonByIdController = async (req, res) => {
    const { id } = req.params;

    try {
        const team = await getHoaDonByIdService(id);
        res.status(200).json(team);
    } catch (error) {
        res.status(404).json({ message: 'Bản ghi HoaDon không tồn tại: ' + error.message });
    }
};
export const getHoaDonByCardIdController = async (req, res) => {
    const { id } = req.params;

    try {
        const team = await getHoaDonByCardIdService(id);
        res.status(200).json(team);
    } catch (error) {
        res.status(404).json({ message: 'Bản ghi HoaDon không tồn tại: ' + error.message });
    }
};

export const getAllHoaDonController = async (req, res) => {
    try {
        const teamList = await getAllHoaDonService();
        res.status(200).json(teamList);
    } catch (error) {
        res.status(500).json({
            message: 'Lỗi khi lấy danh sách bản ghi HoaDon: ' + error.message,
        });
    }
};

export const getAllHoaDonReminderController = async (req, res) => {
    try {
        const hoaDonList = await getAllHoaDonReminder();
        res.status(200).json(hoaDonList);
    } catch (error) {
        res.status(500).json({
            message: 'Lỗi khi lấy danh sách bản ghi HoaDon: ' + error.message,
        });
    }
}

export const updateHoaDonController = async (req, res) => {
    const data = req.body;
    try {
        const team = await updateHoaDonService(data);
        res.status(200).json(team);
    } catch (error) {
        res.status(404).json({
            message: 'Bản ghi không tồn tại hoặc lỗi khi cập nhật: ' + error.message,
        });
    }
};

export const deleteHoaDonController = async (req, res) => {
    let ids = req.params.id;
    if (!Array.isArray(ids)) {
        ids = [ids];
    }

    if (ids.length === 0) {
        return res.status(400).json({ message: 'Yêu cầu không hợp lệ: cần một hoặc nhiều ID.' });
    }

    try {
        const result = await deleteHoaDonService(ids);
        res.status(200).json(result);
    } catch (error) {
        res.status(404).json({
            message: 'Bản ghi HoaDon không tồn tại hoặc lỗi khi xóa: ' + error.message,
        });
    }
};
