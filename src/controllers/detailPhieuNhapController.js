import {
    getFullDetailPhieuNhapService,
    createDetailPhieuNhapService,
    deleteDetailPhieuNhapService,
    getAllDetailPhieuNhapService,
    getDetailPhieuNhapByIdService,
    updateDetailPhieuNhapService, getAllDetailPhieuNhapByPhieuNhapIdService
} from "../services/detailPhieuNhapService.js";

export const getFullDetailPhieuNhapController = async (req, res) => {
    try {
        const data = await getFullDetailPhieuNhapService();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({
            message: 'Lỗi khi lấy danh sách bản ghi DetailPhieuNhap: ' + error.message,
        });
    }
};

export const createDetailPhieuNhapController = async (req, res) => {
    const data = req.body;
    try {
        const team = await createDetailPhieuNhapService(data);
        res.status(201).json(team);
    } catch (error) {
        res.status(500).json({ message: 'Lỗi khi tạo bản ghi DetailPhieuNhap: ' + error.message });
    }
};

export const getDetailPhieuNhapByIdController = async (req, res) => {
    const { id } = req.params;

    try {
        const team = await getDetailPhieuNhapByIdService(id);
        res.status(200).json(team);
    } catch (error) {
        res.status(404).json({ message: 'Bản ghi DetailPhieuNhap không tồn tại: ' + error.message });
    }
}
;
export const getDetailPhieuNhapByPhieuNhapIdController = async (req, res) => {
    const { id } = req.params;

    try {
        const team = await getAllDetailPhieuNhapByPhieuNhapIdService(id);
        res.status(200).json(team);
    } catch (error) {
        res.status(404).json({ message: 'Bản ghi DetailPhieuNhap không tồn tại: ' + error.message });
    }
};

export const getAllDetailPhieuNhapController = async (req, res) => {
    try {
        const teamList = await getAllDetailPhieuNhapService();
        res.status(200).json(teamList);
    } catch (error) {
        res.status(500).json({
            message: 'Lỗi khi lấy danh sách bản ghi DetailPhieuNhap: ' + error.message,
        });
    }
};

export const updateDetailPhieuNhapController = async (req, res) => {
    const data = req.body;
    try {
        const team = await updateDetailPhieuNhapService(data);
        res.status(200).json(team);
    } catch (error) {
        res.status(404).json({
            message: 'Bản ghi không tồn tại hoặc lỗi khi cập nhật: ' + error.message,
        });
    }
};

export const deleteDetailPhieuNhapController = async (req, res) => {
    let ids = req.params.id;
    if (!Array.isArray(ids)) {
        ids = [ids];
    }

    if (ids.length === 0) {
        return res.status(400).json({ message: 'Yêu cầu không hợp lệ: cần một hoặc nhiều ID.' });
    }

    try {
        const result = await deleteDetailPhieuNhapService(ids);
        res.status(200).json(result);
    } catch (error) {
        res.status(404).json({
            message: 'Bản ghi DetailPhieuNhap không tồn tại hoặc lỗi khi xóa: ' + error.message,
        });
    }
};
