import {
    getReportManagementService,
    getReportManagementListService,
    updateReportManagementService,
    updateReportManagementListService,
    createReportManagementService,
    createReportManagementListService,
    deleteReportManagementService,
} from '../services/ktqtReportManagementService.js';

// GET
export const getReportManagementController = async (req, res) => {
    try {
        const {
            id
        } = req.params;
        const data = await getReportManagementService(id);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
};

export const getReportManagementListController = async (req, res) => {
    try {
        const data = await getReportManagementListService();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
};

// UPDATE
export const updateReportManagementController = async (req, res) => {
    try {
        const {
            id
        } = req.params;
        const data = await updateReportManagementService(id, req.body);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
};

export const updateReportManagementListController = async (req, res) => {
    try {
        const {
            id
        } = req.params;
        const data = await updateReportManagementListService(id, req.body);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
};

// CREATE
export const createReportManagementController = async (req, res) => {
    try {
        const {
            name,
            year
        } = req.body;
        const data = await createReportManagementService(name, year);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
};

export const createReportManagementListController = async (req, res) => {
    try {
        const {
            id
        } = req.params;
        const data = await createReportManagementListService(id);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
};
export const deleteReportManagementController = async (req, res) => {
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
        const result = await deleteReportManagementService(ids);
        res.status(200).json(result);
    } catch (error) {
        res.status(404).json({
            message: 'Bản ghi ReportManagement không tồn tại hoặc lỗi khi xóa: ' + error.message,
        });
    }
};