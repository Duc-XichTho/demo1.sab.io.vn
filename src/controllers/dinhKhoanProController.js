import {
    getDinhKhoanProByIdService,
    getAllDinhKhoanProService,
    getDinhKhoanProBySubStepAndCardIdService,
    updateDinhKhoanProService,
    createDinhKhoanProService,
    deleteDinhKhoanProService
} from "../services/dinhKhoanProService.js";

// GET
export const getDinhKhoanProByIdController = async (req, res) => {
    const {
        id
    } = req.params;
    try {
        const DinhKhoanPro = await getDinhKhoanProByIdService(id);
        res.status(200).json(DinhKhoanPro);
    } catch (error) {
        res.status(404).json({
            message: 'Bản ghi DinhKhoanPro không tồn tại: ' + error.message
        });
    }
};

export const getAllDinhKhoanProController = async (req, res) => {
    try {
        const DinhKhoanProList = await getAllDinhKhoanProService();
        res.status(200).json(DinhKhoanProList);
    } catch (error) {
        res.status(500).json({
            message: 'Lỗi khi lấy danh sách bản ghi DinhKhoanPro: ' + error.message,
        });
    }
};

export const getDinhKhoanProBySubStepAndCardIdController = async (req, res) => {
    const {
        subStepId,
        idCard
    } = req.params;
    try {
        const DinhKhoanPro = await getDinhKhoanProBySubStepAndCardIdService(subStepId, idCard);
        res.status(200).json(DinhKhoanPro);
    } catch (error) {
        res.status(404).json({
            message: 'Bản ghi DinhKhoanPro không tồn tại: ' + error.message
        });
    }
};

// UPDATE
export const updateDinhKhoanProController = async (req, res) => {
    const data = req.body;
    try {
        const DinhKhoanPro = await updateDinhKhoanProService(data);
        res.status(200).json(DinhKhoanPro);
    } catch (error) {
        res.status(404).json({
            message: 'Bản ghi DinhKhoanPro không tồn tại hoặc lỗi khi cập nhật: ' + error.message,
        });
    }
};

// CREATE
export const createDinhKhoanProController = async (req, res) => {
    const data = req.body;
    try {
        const DinhKhoanPro = await createDinhKhoanProService(data);
        res.status(201).json(DinhKhoanPro);
    } catch (error) {
        res.status(500).json({
            message: 'Lỗi khi tạo bản ghi DinhKhoanPro: ' + error.message
        });
    }
};

// DELETE
export const deleteDinhKhoanProController = async (req, res) => {
    let ids = req.params.id;
    if (!Array.isArray(ids)) {
        ids = [ids];
    }

    if (ids.length === 0) {
        return res.status(400).json({
            message: 'Yêu cầu không hợp lệ: cần một hoặc nhiều ID.'
        });
    }

    try {
        const result = await deleteDinhKhoanProService(ids);
        res.status(200).json(result);
    } catch (error) {
        res.status(404).json({
            message: 'Bản ghi DinhKhoanPro không tồn tại hoặc lỗi khi xóa: ' + error.message,
        });
    }
};