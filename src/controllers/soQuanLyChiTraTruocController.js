import {
    getAllSoQuanLyChiTraTruocService,
    createSoQuanLyChiTraTruocService,
    updateSoQuanLyChiTraTruocService,
    deleteSoQuanLyChiTraTruocService
} from "../services/soQuanLyChiTraTruocService.js";

// GET
export const getAllSoQuanLyChiTraTruocController = async (req, res) => {
    try {
        const dataList = await getAllSoQuanLyChiTraTruocService();
        res.status(201).json(dataList);
    } catch (error) {
        res.status(500).json({ message: 'Lỗi khi tạo bản ghi SoQuanLyChiTraTruoc: ' + error.message });
    }
};

// UPDATE
export const updateSoQuanLyChiTraTruocController = async (req, res) => {
    try {
        const data = req.body;
        const team = await updateSoQuanLyChiTraTruocService(data);
        res.status(201).json(team);
    } catch (error) {
        res.status(500).json({ message: 'Lỗi khi cập nhật bản ghi SoQuanLyChiTraTruoc: ' + error.message });
    }
};

/// CREATE
export const createSoQuanLyChiTraTruocController = async (req, res) => {
    try {
        const data = req.body;
        const team = await createSoQuanLyChiTraTruocService(data);
        res.status(201).json(team);
    } catch (error) {
        res.status(500).json({ message: 'Lỗi khi tạo bản ghi SoQuanLyChiTraTruoc: ' + error.message });
    }
};

// DELETE
export const deleteSoQuanLyChiTraTruocController = async (req, res) => {
    try {
        const { id } = req.params;
        const team = await deleteSoQuanLyChiTraTruocService(id);
        res.status(201).json(team);
    } catch (error) {
        res.status(500).json({ message: 'Lỗi khi xóa bản ghi SoQuanLyChiTraTruoc: ' + error.message });
    }
};