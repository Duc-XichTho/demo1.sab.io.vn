import {
    createPBGV3Service,
    deletePBGV3Service,
    getAllPBGV3Service,
    getPBGV3ByIdService,
    updatePBGV3Service
} from "../services/pbgv3Service.js";

export const createPBGV3Controller = async (req, res) => {
    const data = req.body;
    try {
        const team = await createPBGV3Service(data);
        res.status(201).json(team);
    } catch (error) {
        res.status(500).json({message: 'Lỗi khi tạo bản ghi PBGV3: ' + error.message});
    }
};

export const getPBGV3ByIdController = async (req, res) => {
    const {id} = req.params;

    try {
        const team = await getPBGV3ByIdService(id);
        res.status(200).json(team);
    } catch (error) {
        res.status(404).json({message: 'Bản ghi PBGV3 không tồn tại: ' + error.message});
    }
};

export const getAllPBGV3Controller = async (req, res) => {
    try {
        const teamList = await getAllPBGV3Service();
        res.status(200).json(teamList);
    } catch (error) {
        res.status(500).json({
            message: 'Lỗi khi lấy danh sách bản ghi PBGV3: ' + error.message,
        });
    }
};

export const updatePBGV3Controller = async (req, res) => {
    const data = req.body;
    try {
        const team = await updatePBGV3Service(data);
        res.status(200).json(team);
    } catch (error) {
        res.status(404).json({
            message: 'Bản ghi không tồn tại hoặc lỗi khi cập nhật: ' + error.message,
        });
    }
};

export const deletePBGV3Controller = async (req, res) => {
    let ids = req.params.id;
    if (!Array.isArray(ids)) {
        ids = [ids];
    }

    if (ids.length === 0) {
        return res.status(400).json({message: 'Yêu cầu không hợp lệ: cần một hoặc nhiều ID.'});
    }

    try {
        const result = await deletePBGV3Service(ids);
        res.status(200).json(result);
    } catch (error) {
        res.status(404).json({
            message: 'Bản ghi PBGV3 không tồn tại hoặc lỗi khi xóa: ' + error.message,
        });
    }
};
