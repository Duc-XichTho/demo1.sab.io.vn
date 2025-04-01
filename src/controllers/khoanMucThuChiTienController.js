import {
  createKhoanMucThuChiTienService,
  getKhoanMucThuChiTienByIdService,
  getAllKhoanMucThuChiTienService,
  updateKhoanMucThuChiTienService,
  deleteKhoanMucThuChiTienService,
} from '../services/khoanMucThuChiTienService.js';

export const createKhoanMucThuChiTienController = async (req, res) => {
  const data = req.body;
  try {
    const team = await createKhoanMucThuChiTienService(data);
    res.status(201).json(team);
  } catch (error) {
    res.status(500).json({
      message: 'Lỗi khi tạo bản ghi KhoanMucThuChiTien: ' + error.message
    });
  }
};

export const getKhoanMucThuChiTienByIdController = async (req, res) => {
  const {
    id
  } = req.body;
  try {
    const team = await getKhoanMucThuChiTienByIdService(id);
    res.status(200).json(team);
  } catch (error) {
    res.status(404).json({
      message: 'Bản ghi KhoanMucThuChiTien không tồn tại: ' + error.message
    });
  }
};

export const getAllKhoanMucThuChiTienController = async (req, res) => {
  try {
    const teamList = await getAllKhoanMucThuChiTienService();
    res.status(200).json(teamList);
  } catch (error) {
    res.status(500).json({
      message: 'Lỗi khi lấy danh sách bản ghi KhoanMucThuChiTien: ' + error.message,
    });
  }
};

export const updateKhoanMucThuChiTienController = async (req, res) => {
  const data = req.body;
  try {
    const team = await updateKhoanMucThuChiTienService(data);
    res.status(200).json(team);
  } catch (error) {
    res.status(404).json({
      message: 'Bản ghi KhoanMucThuChiTien không tồn tại hoặc lỗi khi cập nhật: ' + error.message,
    });
  }
};

export const deleteKhoanMucThuChiTienController = async (req, res) => {
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
    const result = await deleteKhoanMucThuChiTienService(ids);
    res.status(200).json(result);
  } catch (error) {
    res.status(404).json({
      message: 'Bản ghi KhoanMucThuChiTien không tồn tại hoặc lỗi khi xóa: ' + error.message,
    });
  }
};