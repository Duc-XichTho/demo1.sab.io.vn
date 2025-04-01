import {
  createKhoanMucDoanhThuChiPhiService,
  getKhoanMucDoanhThuChiPhiByIdService,
  getAllKhoanMucDoanhThuChiPhiService,
  updateKhoanMucDoanhThuChiPhiService,
  deleteKhoanMucDoanhThuChiPhiService,
} from '../services/khoanMucDoanhThuChiPhiService.js';

export const createKhoanMucDoanhThuChiPhiController = async (req, res) => {
  const data = req.body;
  try {
    const team = await createKhoanMucDoanhThuChiPhiService(data);
    res.status(201).json(team);
  } catch (error) {
    res.status(500).json({
      message: 'Lỗi khi tạo bản ghi KhoanMucDoanhThuChiPhi: ' + error.message
    });
  }
};

export const getKhoanMucDoanhThuChiPhiByIdController = async (req, res) => {
  const {
    id
  } = req.body;
  try {
    const team = await getKhoanMucDoanhThuChiPhiByIdService(id);
    res.status(200).json(team);
  } catch (error) {
    res.status(404).json({
      message: 'Bản ghi KhoanMucDoanhThuChiPhi không tồn tại: ' + error.message
    });
  }
};

export const getAllKhoanMucDoanhThuChiPhiController = async (req, res) => {
  try {
    const teamList = await getAllKhoanMucDoanhThuChiPhiService();
    res.status(200).json(teamList);
  } catch (error) {
    res.status(500).json({
      message: 'Lỗi khi lấy danh sách bản ghi KhoanMucDoanhThuChiPhi: ' + error.message,
    });
  }
};

export const updateKhoanMucDoanhThuChiPhiController = async (req, res) => {
  const data = req.body;
  try {
    const team = await updateKhoanMucDoanhThuChiPhiService(data);
    res.status(200).json(team);
  } catch (error) {
    res.status(404).json({
      message: 'Bản ghi KhoanMucDoanhThuChiPhi không tồn tại hoặc lỗi khi cập nhật: ' + error.message,
    });
  }
};

export const deleteKhoanMucDoanhThuChiPhiController = async (req, res) => {
  let ids = req.params.id;
  if (!Array.isArray(ids)) {
    ids = [ids];
  }

  if (ids.length === 0) {
    return res.status(400).json({
      message: 'Yêu cầu không hợp lệ: cần một hoặc nhiều ID.'
    });
  }

  try {
    const result = await deleteKhoanMucDoanhThuChiPhiService(ids);
    res.status(200).json(result);
  } catch (error) {
    res.status(404).json({
      message: 'Bản ghi KhoanMucDoanhThuChiPhi không tồn tại hoặc lỗi khi xóa: ' + error.message,
    });
  }
};