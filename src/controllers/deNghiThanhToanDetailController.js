import {
    createDeNghiThanhToanDetailService,
    updateDeNghiThanhToanDetailService,
    hideDeNghiThanhToanDetailService,
    getAllDeNghiThanhToanDetailByDeNghiThanhToanIdService, getDeNghiThanhToanDetailByDeNghiThanhToanIdService
} from "../services/deNghiThanhToanDetailService.js";

export const getAllDeNghiThanhToanDetailByDeNghiThanhToanIdController = async (req, res) => {
    try {
        const data = await getAllDeNghiThanhToanDetailByDeNghiThanhToanIdService(req.params.id);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({
            message: 'Lỗi khi lấy danh sách bản ghi DeNghiThanhToanDetail: ' + error.message,
        });
    }
}
;

export const getDeNghiThanhToanDetailByDeNghiThanhToanIdController = async (req, res) => {
    try {
        const data = await getDeNghiThanhToanDetailByDeNghiThanhToanIdService(req.params.id);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({
            message: 'Lỗi khi lấy danh sách bản ghi DeNghiThanhToanDetail: ' + error.message,
        });
    }
};

export const createDeNghiThanhToanDetailController = async (req, res) => {
    const data = req.body;
    try {
        const team = await createDeNghiThanhToanDetailService(data);
        res.status(201).json(team);
    } catch (error) {
        res.status(500).json({message: 'Lỗi khi tạo bản ghi DeNghiThanhToanDetail: ' + error.message});
    }
};


export const updateDeNghiThanhToanDetailController = async (req, res) => {
    const data = req.body;
    try {
        const team = await updateDeNghiThanhToanDetailService(data);
        res.status(200).json(team);
    } catch (error) {
        res.status(404).json({
            message: 'Bản ghi không tồn tại hoặc lỗi khi cập nhật: ' + error.message,
        });
    }
};

export const deleteDeNghiThanhToanDetailController = async (req, res) => {
    let ids = req.params.id;
    if (!Array.isArray(ids)) {
        ids = [ids];
    }

    if (ids.length === 0) {
        return res.status(400).json({message: 'Yêu cầu không hợp lệ: cần một hoặc nhiều ID.'});
    }

    try {
        const result = await hideDeNghiThanhToanDetailService(ids);
        res.status(200).json(result);
    } catch (error) {
        res.status(404).json({
            message: 'Bản ghi DeNghiThanhToanDetail không tồn tại hoặc lỗi khi xóa: ' + error.message,
        });
    }
};
