import {
    getDinhKhoanProDataByDinhKhoanId,
    updateDInhKhoanProData,
    createDinhKhoanProData,
    getAllDinhKhoanProData,
    deleteDinhKhoanProData
} from "../services/dinhKhoanProDataService.js";

// GET
export const getAllDinhKhoanProDataController = async (req, res) => {
    try {
        const data = await getAllDinhKhoanProData();
        res.status(200).json(data);
    } catch (error) {
        res.status(404).json({ message: 'Err: ' + error.message });
    }
};

// GET
export const getDinhKhoanProDataByDinhKhoanIdController = async (req, res) => {
    try {
        const { dinhKhoan_id } = req.params;
        const data = await getDinhKhoanProDataByDinhKhoanId(dinhKhoan_id);
        res.status(200).json(data);
    } catch (error) {
        res.status(404).json({ message: 'Bản ghi DinhKhoanProData không tồn tại: ' + error.message });
    }
};

// UPDATE
export const updateDinhKhoanProDataController = async (req, res) => {
    try {
        const newData = req.body;
        const data = await updateDInhKhoanProData(newData);
        res.status(200).json(data);
    } catch (error) {
        res.status(404).json({
            message: 'Bản ghi DinhKhoanProData không tồn tại hoặc lỗi khi cập nhật: ' + error.message,
        });
    }
};

// CREATE
export const createDinhKhoanProDataController = async (req, res) => {
    try {
        const newData = req.body;
        const data = await createDinhKhoanProData(newData);
        res.status(200).json(data);
    } catch (error) {
        res.status(404).json({
            message: 'Lỗi khi tạo bản ghi DinhKhoanProData: ' + error.message,
        });
    }
};

// DELETE
export const deleteDinhKhoanProDataController = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await deleteDinhKhoanProData(id);
        res.status(200).json(data);
    } catch (error) {
        res.status(404).json({
            message: 'Bản ghi DinhKhoanProData không tồn tại hoặc lỗi khi xóa: ' + error.message,
        });
    }
};
