import {
    createDetailPhieuXuatService,
    deleteDetailPhieuXuatService,
    getAllDetailPhieuXuatService,
    getDetailPhieuXuatByPhieuXuatIdService,
    getFullDetailPhieuXuatService,
    updateDetailPhieuXuatService
} from "../services/detailPhieuXuatService.js";

export const getFullDetailPhieuXuatController = async (req, res) => {
    try {
        const data = await getFullDetailPhieuXuatService();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({
            message: 'Lỗi khi lấy danh sách bản ghi DetailPhieuXuat: ' + error.message,
        });
    }
};

export const createDetailPhieuXuatController = async (req, res) => {
    const data = req.body;
    try {
        const team = await createDetailPhieuXuatService(data);
        res.status(201).json(team);
    } catch (error) {
        res.status(500).json({ message: 'Lỗi khi tạo bản ghi DetailPhieuXuat: ' + error.message });
    }
};

export const getDetailPhieuXuatByPhieuXuatIdController = async (req, res) => {
    const { id } = req.params;

    try {
        const team = await getDetailPhieuXuatByPhieuXuatIdService(id);
        res.status(200).json(team);
    } catch (error) {
        res.status(404).json({ message: 'Bản ghi DetailPhieuXuat không tồn tại: ' + error.message });
    }
};

export const getAllDetailPhieuXuatController = async (req, res) => {
    try {
        const teamList = await getAllDetailPhieuXuatService();
        res.status(200).json(teamList);
    } catch (error) {
        res.status(500).json({
            message: 'Lỗi khi lấy danh sách bản ghi DetailPhieuXuat: ' + error.message,
        });
    }
};

export const updateDetailPhieuXuatController = async (req, res) => {
    const data = req.body;
    try {
        const team = await updateDetailPhieuXuatService(data);
        res.status(200).json(team);
    } catch (error) {
        res.status(404).json({
            message: 'Bản ghi không tồn tại hoặc lỗi khi cập nhật: ' + error.message,
        });
    }
};

export const deleteDetailPhieuXuatController = async (req, res) => {
    let ids = req.params.id;
    if (!Array.isArray(ids)) {
        ids = [ids];
    }

    if (ids.length === 0) {
        return res.status(400).json({ message: 'Yêu cầu không hợp lệ: cần một hoặc nhiều ID.' });
    }

    try {
        const result = await deleteDetailPhieuXuatService(ids);
        res.status(200).json(result);
    } catch (error) {
        res.status(404).json({
            message: 'Bản ghi DetailPhieuXuat không tồn tại hoặc lỗi khi xóa: ' + error.message,
        });
    }
};
