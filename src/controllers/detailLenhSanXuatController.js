import {
    createDetailLenhSanXuatService, deleteDetailLenhSanXuatService,
    getAllDetailLenhSanXuatService,
    getDetailLenhSanXuatByIdService,
    updateDetailLenhSanXuatService
} from "../services/detailLenhSanXuatService.js";

export const createDetailLenhSanXuatController = async (req, res) => {
    const data = req.body;
    try {
        const team = await createDetailLenhSanXuatService(data);
        res.status(201).json(team);
    } catch (error) {
        res.status(500).json({message: 'Lỗi khi tạo bản ghi DetailLenhSanXuat: ' + error.message});
    }
};

export const getDetailLenhSanXuatByIdController = async (req, res) => {
    const { id } = req.params; 

    try {
        const team = await getDetailLenhSanXuatByIdService(id);
        res.status(200).json(team);
    } catch (error) {
        res.status(404).json({message: 'Bản ghi DetailLenhSanXuat không tồn tại: ' + error.message});
    }
};

export const getAllDetailLenhSanXuatController = async (req, res) => {
    try {
        const teamList = await getAllDetailLenhSanXuatService();
        res.status(200).json(teamList);
    } catch (error) {
        res.status(500).json({
            message: 'Lỗi khi lấy danh sách bản ghi DetailLenhSanXuat: ' + error.message,
        });
    }
};

export const updateDetailLenhSanXuatController = async (req, res) => {
    const data = req.body;
    try {
        const team = await updateDetailLenhSanXuatService(data);
        res.status(200).json(team);
    } catch (error) {
        res.status(404).json({
            message: 'Bản ghi không tồn tại hoặc lỗi khi cập nhật: ' + error.message,
        });
    }
};

export const deleteDetailLenhSanXuatController = async (req, res) => {
    let ids = req.params.id;
    if (!Array.isArray(ids)) {
        ids = [ids];
    }

    if (ids.length === 0) {
        return res.status(400).json({message: 'Yêu cầu không hợp lệ: cần một hoặc nhiều ID.'});
    }

    try {
        const result = await deleteDetailLenhSanXuatService(ids);
        res.status(200).json(result);
    } catch (error) {
        res.status(404).json({
            message: 'Bản ghi DetailLenhSanXuat không tồn tại hoặc lỗi khi xóa: ' + error.message,
        });
    }
};
