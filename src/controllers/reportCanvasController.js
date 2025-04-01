import {
    createReportCanvasService, deleteReportCanvasService,
    getAllReportCanvasService,
    getReportCanvasByIdService,
    updateReportCanvasService
} from "../services/reportCanvasService.js";

export const createReportCanvasController = async (req, res) => {
    const data = req.body;
    try {
        const team = await createReportCanvasService(data);
        res.status(201).json(team);
    } catch (error) {
        res.status(500).json({message: 'Lỗi khi tạo bản ghi ReportCanvas: ' + error.message});
    }
};

export const getReportCanvasByIdController = async (req, res) => {
    const { id } = req.params; 

    try {
        const team = await getReportCanvasByIdService(id);
        res.status(200).json(team);
    } catch (error) {
        res.status(404).json({message: 'Bản ghi ReportCanvas không tồn tại: ' + error.message});
    }
};

export const getAllReportCanvasController = async (req, res) => {
    try {
        const teamList = await getAllReportCanvasService();
        res.status(200).json(teamList);
    } catch (error) {
        res.status(500).json({
            message: 'Lỗi khi lấy danh sách bản ghi ReportCanvas: ' + error.message,
        });
    }
};

export const updateReportCanvasController = async (req, res) => {
    const data = req.body;
    try {
        const team = await updateReportCanvasService(data);
        res.status(200).json(team);
    } catch (error) {
        res.status(404).json({
            message: 'Bản ghi không tồn tại hoặc lỗi khi cập nhật: ' + error.message,
        });
    }
};

export const deleteReportCanvasController = async (req, res) => {
    let ids = req.params.id;
    if (!Array.isArray(ids)) {
        ids = [ids];
    }

    if (ids.length === 0) {
        return res.status(400).json({message: 'Yêu cầu không hợp lệ: cần một hoặc nhiều ID.'});
    }

    try {
        const result = await deleteReportCanvasService(ids);
        res.status(200).json(result);
    } catch (error) {
        res.status(404).json({
            message: 'Bản ghi ReportCanvas không tồn tại hoặc lỗi khi xóa: ' + error.message,
        });
    }
};
