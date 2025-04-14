import {
    createBCanvasDataOriginalRowService, deleteBCanvasDataOriginalRowService,
    getAllBCanvasDataOriginalRowService,
    getBCanvasDataOriginalRowByIdService, getBCanvasDataOriginalRowsByIdDataOriginalService,
    updateBCanvasDataOriginalRowService
} from "../services/bCanvasDataOriginalRowService.js";

export const createBCanvasDataOriginalRowController = async (req, res) => {
    const {id_DataOriginal, data} = req.body;
    try {
        const team = await createBCanvasDataOriginalRowService(id_DataOriginal,data);
        res.status(201).json(team);
    } catch (error) {
        res.status(500).json({message: 'Lỗi khi tạo bản ghi BCanvasDataOriginalRow: ' + error.message});
    }
};

export const getBCanvasDataOriginalRowByIdController = async (req, res) => {
    const { id } = req.params; 

    try {
        const team = await getBCanvasDataOriginalRowByIdService(id);
        res.status(200).json(team);
    } catch (error) {
        res.status(404).json({message: 'Bản ghi BCanvasDataOriginalRow không tồn tại: ' + error.message});
    }
}

;export const getBCanvasDataOriginalRowByIdDataOriginalController = async (req, res) => {
    const { id } = req.params;

    try {
        const team = await getBCanvasDataOriginalRowsByIdDataOriginalService(id);
        res.status(200).json(team);
    } catch (error) {
        res.status(404).json({message: 'Bản ghi BCanvasDataOriginalRow không tồn tại: ' + error.message});
    }
};

export const getAllBCanvasDataOriginalRowController = async (req, res) => {
    try {
        const teamList = await getAllBCanvasDataOriginalRowService();
        res.status(200).json(teamList);
    } catch (error) {
        res.status(500).json({
            message: 'Lỗi khi lấy danh sách bản ghi BCanvasDataOriginalRow: ' + error.message,
        });
    }
};

export const updateBCanvasDataOriginalRowController = async (req, res) => {
    const {
        id_DataOriginal,
        data
    } = req.body;
    try {
        const team = await updateBCanvasDataOriginalRowService(id_DataOriginal,data);
        res.status(200).json(team);
    } catch (error) {
        res.status(404).json({
            message: 'Bản ghi không tồn tại hoặc lỗi khi cập nhật: ' + error.message,
        });
    }
};

export const deleteBCanvasDataOriginalRowController = async (req, res) => {
    let ids = req.params.id;
    if (!Array.isArray(ids)) {
        ids = [ids];
    }

    if (ids.length === 0) {
        return res.status(400).json({message: 'Yêu cầu không hợp lệ: cần một hoặc nhiều ID.'});
    }

    try {
        const result = await deleteBCanvasDataOriginalRowService(ids);
        res.status(200).json(result);
    } catch (error) {
        res.status(404).json({
            message: 'Bản ghi BCanvasDataOriginalRow không tồn tại hoặc lỗi khi xóa: ' + error.message,
        });
    }
};
