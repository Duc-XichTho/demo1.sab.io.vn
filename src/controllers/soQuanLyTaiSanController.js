import {
    getAllSoQuanLyTaiSanService,
    createSoQuanLyTaiSanService,
    updateSoQuanLyTaiSanService,
    deleteSoQuanLyTaiSanService
} from "../services/soQuanLyTaiSanService.js";

// GET
export const getAllSoQuanLyTaiSanController = async (req, res) => {
    try {
        const dataList = await getAllSoQuanLyTaiSanService();
        res.status(201).json(dataList);
    } catch (error) {
        res.status(500).json({ message: 'Lỗi khi tạo bản ghi SoQuanLyTaiSan: ' + error.message });
    }
};

// UPDATE
export const updateSoQuanLyTaiSanController = async (req, res) => {
    try {
        const data = req.body;
        const team = await updateSoQuanLyTaiSanService(data);
        res.status(201).json(team);
    } catch (error) {
        res.status(500).json({ message: 'Lỗi khi cập nhật bản ghi SoQuanLyTaiSan: ' + error.message });
    }
};

/// CREATE
export const createSoQuanLyTaiSanController = async (req, res) => {
    try {
        const data = req.body;
        const team = await createSoQuanLyTaiSanService(data);
        res.status(201).json(team);
    } catch (error) {
        res.status(500).json({ message: 'Lỗi khi tạo bản ghi SoQuanLyTaiSan: ' + error.message });
    }
};

// DELETE
export const deleteSoQuanLyTaiSanController = async (req, res) => {
    try {
        const { id } = req.params;
        const team = await deleteSoQuanLyTaiSanService(id);
        res.status(201).json(team);
    } catch (error) {
        res.status(500).json({ message: 'Lỗi khi xóa bản ghi SoQuanLyTaiSan: ' + error.message });
    }
};