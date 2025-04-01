import {
    getPhieuXuatByCardIdService,
    createPhieuXuatService,
    deletePhieuXuatService,
    getAllPhieuXuatService,
    getPhieuXuatByIdService,
    updatePhieuXuatService
} from "../services/phieuXuatService.js";

export const getPhieuXuatByCardIdController = async (req, res) => {
    const { id } = req.params;
    try {
        const data = await getPhieuXuatByCardIdService(id);
        res.status(200).json(data);
    } catch (error) {
        res.status(404).json({ message: 'Bản ghi PhieuXuat không tồn tại: ' + error.message });
    }
}

export const createPhieuXuatController = async (req, res) => {
    const data = req.body;
    try {
        const team = await createPhieuXuatService(data);
        res.status(201).json(team);
    } catch (error) {
        res.status(500).json({ message: 'Lỗi khi tạo bản ghi PhieuXuat: ' + error.message });
    }
};

export const getPhieuXuatByIdController = async (req, res) => {
    const { id } = req.params;

    try {
        const team = await getPhieuXuatByIdService(id);
        res.status(200).json(team);
    } catch (error) {
        res.status(404).json({ message: 'Bản ghi PhieuXuat không tồn tại: ' + error.message });
    }
};

export const getAllPhieuXuatController = async (req, res) => {
    try {
        const teamList = await getAllPhieuXuatService();
        res.status(200).json(teamList);
    } catch (error) {
        res.status(500).json({
            message: 'Lỗi khi lấy danh sách bản ghi PhieuXuat: ' + error.message,
        });
    }
};

export const updatePhieuXuatController = async (req, res) => {
    const data = req.body;
    try {
        const team = await updatePhieuXuatService(data);
        res.status(200).json(team);
    } catch (error) {
        res.status(404).json({
            message: 'Bản ghi không tồn tại hoặc lỗi khi cập nhật: ' + error.message,
        });
    }
};

export const deletePhieuXuatController = async (req, res) => {
    let ids = req.params.id;
    if (!Array.isArray(ids)) {
        ids = [ids];
    }

    if (ids.length === 0) {
        return res.status(400).json({ message: 'Yêu cầu không hợp lệ: cần một hoặc nhiều ID.' });
    }

    try {
        const result = await deletePhieuXuatService(ids);
        res.status(200).json(result);
    } catch (error) {
        res.status(404).json({
            message: 'Bản ghi PhieuXuat không tồn tại hoặc lỗi khi xóa: ' + error.message,
        });
    }
};
