import {
    createNganhService, deleteNganhService,
    getAllNganhService,
    getNganhByIdService,
    updateNganhService
} from "../services/nganhService.js";

export const createNganhController = async (req, res) => {
    const data = req.body;
    try {
        const team = await createNganhService(data);
        res.status(201).json(team);
    } catch (error) {
        res.status(500).json({message: 'Lỗi khi tạo bản ghi Nganh: ' + error.message});
    }
};

export const getNganhByIdController = async (req, res) => {
    const { id } = req.params; 

    try {
        const team = await getNganhByIdService(id);
        res.status(200).json(team);
    } catch (error) {
        res.status(404).json({message: 'Bản ghi Nganh không tồn tại: ' + error.message});
    }
};

export const getAllNganhController = async (req, res) => {
    try {
        const teamList = await getAllNganhService();
        res.status(200).json(teamList);
    } catch (error) {
        res.status(500).json({
            message: 'Lỗi khi lấy danh sách bản ghi Nganh: ' + error.message,
        });
    }
};

export const updateNganhController = async (req, res) => {
    const data = req.body;
    try {
        const team = await updateNganhService(data);
        res.status(200).json(team);
    } catch (error) {
        res.status(404).json({
            message: 'Bản ghi không tồn tại hoặc lỗi khi cập nhật: ' + error.message,
        });
    }
};

export const deleteNganhController = async (req, res) => {
    let ids = req.params.id;
    if (!Array.isArray(ids)) {
        ids = [ids];
    }

    if (ids.length === 0) {
        return res.status(400).json({message: 'Yêu cầu không hợp lệ: cần một hoặc nhiều ID.'});
    }

    try {
        const result = await deleteNganhService(ids);
        res.status(200).json(result);
    } catch (error) {
        res.status(404).json({
            message: 'Bản ghi Nganh không tồn tại hoặc lỗi khi xóa: ' + error.message,
        });
    }
};
