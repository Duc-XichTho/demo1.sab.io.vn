import {
    createBCanvasDataOriginalService, deleteAllTemplateDataByDataOriginalService, deleteBCanvasDataOriginalService,
    getAllBCanvasDataOriginalService, getAllTemplateDataByDataOriginalService,
    getBCanvasDataRowOriginalByOriginalIdService,
    updateBCanvasDataOriginalService
} from "../services/bCanvasDataOriginalService.js";

export const createBCanvasDataOriginalController = async (req, res) => {
    const data = req.body;
    try {
        const team = await createBCanvasDataOriginalService(data);
        res.status(201).json(team);
    } catch (error) {
        res.status(500).json({message: 'Lỗi khi tạo bản ghi BCanvasDataOriginal: ' + error.message});
    }
};

export const getBCanvasDataOriginalWithRowByIdController = async (req, res) => {
    const { id } = req.params;

    try {
        const team = await getBCanvasDataRowOriginalByOriginalIdService(id);
        res.status(200).json(team);
    } catch (error) {
        res.status(404).json({message: 'Bản ghi BCanvasDataOriginal không tồn tại: ' + error.message});
    }
};

export const getAllBCanvasDataOriginalController = async (req, res) => {
    try {
        const teamList = await getAllBCanvasDataOriginalService();
        res.status(200).json(teamList);
    } catch (error) {
        res.status(500).json({
            message: 'Lỗi khi lấy danh sách bản ghi BCanvasDataOriginal: ' + error.message,
        });
    }
};

export const updateBCanvasDataOriginalController = async (req, res) => {
    const data = req.body;
    try {
        const team = await updateBCanvasDataOriginalService(data);
        res.status(200).json(team);
    } catch (error) {
        res.status(404).json({
            message: 'Bản ghi không tồn tại hoặc lỗi khi cập nhật: ' + error.message,
        });
    }
};

export const deleteBCanvasDataOriginalController = async (req, res) => {
    let id = req.params.id;

    try {
        const result = await deleteBCanvasDataOriginalService(id);
        res.status(200).json(result);
    } catch (error) {
        res.status(404).json({
            message: 'Bản ghi BCanvasDataOriginal không tồn tại hoặc lỗi khi xóa: ' + error.message,
        });
    }
};



export const getAllTemplateDataByDataOriginalController = async (req, res) => {
    const { id } = req.params;

    try {
        const team = await getAllTemplateDataByDataOriginalService(id);
        res.status(200).json(team);
    } catch (error) {
        res.status(200).json([]);
    }
};

export const deleteAllTemplateDataByDataOriginalController = async (req, res) => {
    const { id } = req.params;

    try {
        const result = await deleteAllTemplateDataByDataOriginalService(id);
        res.status(200).json(result);
    } catch (error) {
        res.status(200).json({
            message: 'Bản ghi TemplateData không tồn tại hoặc lỗi khi xóa: ' + error.message,
        });
    }
};
