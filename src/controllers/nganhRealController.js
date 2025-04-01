import {
    createNganhRealService, deleteNganhRealService,
    getAllNganhRealService,
    getNganhRealByIdService,
    updateNganhRealService
} from "../services/nganhRealService.js";

export const createNganhRealController = async (req, res) => {
    const data = req.body;
    try {
        const team = await createNganhRealService(data);
        res.status(201).json(team);
    } catch (error) {
        res.status(500).json({message: 'Lỗi khi tạo bản ghi NganhReal: ' + error.message});
    }
};

export const getNganhRealByIdController = async (req, res) => {
    const { id } = req.params; 

    try {
        const team = await getNganhRealByIdService(id);
        res.status(200).json(team);
    } catch (error) {
        res.status(404).json({message: 'Bản ghi NganhReal không tồn tại: ' + error.message});
    }
};

export const getAllNganhRealController = async (req, res) => {
    try {
        const teamList = await getAllNganhRealService();
        res.status(200).json(teamList);
    } catch (error) {
        res.status(500).json({
            message: 'Lỗi khi lấy danh sách bản ghi NganhReal: ' + error.message,
        });
    }
};

export const updateNganhRealController = async (req, res) => {
    const data = req.body;
    try {
        const team = await updateNganhRealService(data);
        res.status(200).json(team);
    } catch (error) {
        res.status(404).json({
            message: 'Bản ghi không tồn tại hoặc lỗi khi cập nhật: ' + error.message,
        });
    }
};

export const deleteNganhRealController = async (req, res) => {
    let ids = req.params.id;
    if (!Array.isArray(ids)) {
        ids = [ids];
    }

    if (ids.length === 0) {
        return res.status(400).json({message: 'Yêu cầu không hợp lệ: cần một hoặc nhiều ID.'});
    }

    try {
        const result = await deleteNganhRealService(ids);
        res.status(200).json(result);
    } catch (error) {
        res.status(404).json({
            message: 'Bản ghi NganhReal không tồn tại hoặc lỗi khi xóa: ' + error.message,
        });
    }
};
