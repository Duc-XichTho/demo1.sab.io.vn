import {
    createPBLSXService, deletePBLSXService,
    getAllPBLSXService,
    getPBLSXByIdService,
    updatePBLSXService
} from "../services/pblsxService.js";

export const createPBLSXController = async (req, res) => {
    const data = req.body;
    try {
        const team = await createPBLSXService(data);
        res.status(201).json(team);
    } catch (error) {
        res.status(500).json({message: 'Lỗi khi tạo bản ghi PBLSX: ' + error.message});
    }
};

export const getPBLSXByIdController = async (req, res) => {
    const { id } = req.params; 

    try {
        const team = await getPBLSXByIdService(id);
        res.status(200).json(team);
    } catch (error) {
        res.status(404).json({message: 'Bản ghi PBLSX không tồn tại: ' + error.message});
    }
};

export const getAllPBLSXController = async (req, res) => {
    try {
        const teamList = await getAllPBLSXService();
        res.status(200).json(teamList);
    } catch (error) {
        res.status(500).json({
            message: 'Lỗi khi lấy danh sách bản ghi PBLSX: ' + error.message,
        });
    }
};

export const updatePBLSXController = async (req, res) => {
    const data = req.body;
    try {
        const team = await updatePBLSXService(data);
        res.status(200).json(team);
    } catch (error) {
        res.status(404).json({
            message: 'Bản ghi không tồn tại hoặc lỗi khi cập nhật: ' + error.message,
        });
    }
};

export const deletePBLSXController = async (req, res) => {
    let ids = req.params.id;
    if (!Array.isArray(ids)) {
        ids = [ids];
    }

    if (ids.length === 0) {
        return res.status(400).json({message: 'Yêu cầu không hợp lệ: cần một hoặc nhiều ID.'});
    }

    try {
        const result = await deletePBLSXService(ids);
        res.status(200).json(result);
    } catch (error) {
        res.status(404).json({
            message: 'Bản ghi PBLSX không tồn tại hoặc lỗi khi xóa: ' + error.message,
        });
    }
};
