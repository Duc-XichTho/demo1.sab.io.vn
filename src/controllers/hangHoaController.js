import {
    getAllInfoInventoryService,
    createHangHoaService,
    deleteHangHoaService,
    getAllHangHoaService,
    getHangHoaByIdService,
    updateHangHoaService
} from '../services/hangHoaService.js';

export const getAllInfoInventoryController = async (req, res) => {
    try {
        const data = await getAllInfoInventoryService();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({
            message: 'Lỗi khi lấy danh sách bản ghi HangHoa: ' + error.message,
        });
    }
};

export const createHangHoaController = async (req, res) => {
    const data = req.body;
    try {
        const team = await createHangHoaService(data);
        res.status(201).json(team);
    } catch (error) {
        res.status(500).json({message: 'Lỗi khi tạo bản ghi HangHoa: ' + error.message});
    }
};

export const getHangHoaByIdController = async (req, res) => {
    const { id } = req.params; 

    try {
        const team = await getHangHoaByIdService(id);
        res.status(200).json(team);
    } catch (error) {
        res.status(404).json({message: 'Bản ghi HangHoa không tồn tại: ' + error.message});
    }
};

export const getAllHangHoaController = async (req, res) => {
    try {
        const teamList = await getAllHangHoaService();
        res.status(200).json(teamList);
    } catch (error) {
        res.status(500).json({
            message: 'Lỗi khi lấy danh sách bản ghi HangHoa: ' + error.message,
        });
    }
};

export const updateHangHoaController = async (req, res) => {
    const data = req.body;
    try {
        const team = await updateHangHoaService(data);
        res.status(200).json(team);
    } catch (error) {
        res.status(404).json({
            message: 'Bản ghi không tồn tại hoặc lỗi khi cập nhật: ' + error.message,
        });
    }
};

export const deleteHangHoaController = async (req, res) => {
    let ids = req.params.id;
    if (!Array.isArray(ids)) {
        ids = [ids];
    }

    if (ids.length === 0) {
        return res.status(400).json({message: 'Yêu cầu không hợp lệ: cần một hoặc nhiều ID.'});
    }

    try {
        const result = await deleteHangHoaService(ids);
        res.status(200).json(result);
    } catch (error) {
        res.status(404).json({
            message: 'Bản ghi HangHoa không tồn tại hoặc lỗi khi xóa: ' + error.message,
        });
    }
};
