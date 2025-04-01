import {
    getDieuChuyenKhoByCardIdService,
    createDieuChuyenKhoService,
    deleteDieuChuyenKhoService,
    getAllDieuChuyenKhoService,
    getDieuChuyenKhoByIdService,
    updateDieuChuyenKhoService
} from "../services/dieuChuyenKhoService.js";

export const getDieuChuyenKhoByCardIdController = async (req, res) => {
    const { id } = req.params;
    try {
        const data = await getDieuChuyenKhoByCardIdService(id);
        res.status(200).json(data);
    } catch (error) {
        res.status(404).json({ message: 'Bản ghi DieuChuyenKho không tồn tại: ' + error.message });
    }
}

export const createDieuChuyenKhoController = async (req, res) => {
    const data = req.body;
    try {
        const team = await createDieuChuyenKhoService(data);
        res.status(201).json(team);
    } catch (error) {
        res.status(500).json({ message: 'Lỗi khi tạo bản ghi DieuChuyenKho: ' + error.message });
    }
};

export const getDieuChuyenKhoByIdController = async (req, res) => {
    const { id } = req.params;

    try {
        const team = await getDieuChuyenKhoByIdService(id);
        res.status(200).json(team);
    } catch (error) {
        res.status(404).json({ message: 'Bản ghi DieuChuyenKho không tồn tại: ' + error.message });
    }
};

export const getAllDieuChuyenKhoController = async (req, res) => {
    try {
        const teamList = await getAllDieuChuyenKhoService();
        res.status(200).json(teamList);
    } catch (error) {
        res.status(500).json({
            message: 'Lỗi khi lấy danh sách bản ghi DieuChuyenKho: ' + error.message,
        });
    }
};

export const updateDieuChuyenKhoController = async (req, res) => {
    const data = req.body;
    try {
        const team = await updateDieuChuyenKhoService(data);
        res.status(200).json(team);
    } catch (error) {
        res.status(404).json({
            message: 'Bản ghi không tồn tại hoặc lỗi khi cập nhật: ' + error.message,
        });
    }
};

export const deleteDieuChuyenKhoController = async (req, res) => {
    let ids = req.params.id;
    if (!Array.isArray(ids)) {
        ids = [ids];
    }

    if (ids.length === 0) {
        return res.status(400).json({ message: 'Yêu cầu không hợp lệ: cần một hoặc nhiều ID.' });
    }

    try {
        const result = await deleteDieuChuyenKhoService(ids);
        res.status(200).json(result);
    } catch (error) {
        res.status(404).json({
            message: 'Bản ghi DieuChuyenKho không tồn tại hoặc lỗi khi xóa: ' + error.message,
        });
    }
};
