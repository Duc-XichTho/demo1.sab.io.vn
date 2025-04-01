import {
  createLoaiTienService,
  getLoaiTienByIdService,
  getAllLoaiTienService,
  updateLoaiTienService,
  deleteLoaiTienService,
} from '../services/loaiTienService.js';

export const createLoaiTienController = async (req, res) => {
  const data = req.body;
  try {
    const team = await createLoaiTienService(data);
    res.status(201).json(team);
  } catch (error) {
    res.status(500).json({
      message: 'Lỗi khi tạo bản ghi LoaiTien: ' + error.message
    });
  }
};

export const getLoaiTienByIdController = async (req, res) => {
  const {
    id
  } = req.body;
  try {
    const team = await getLoaiTienByIdService(id);
    res.status(200).json(team);
  } catch (error) {
    res.status(404).json({
      message: 'Bản ghi LoaiTien không tồn tại: ' + error.message
    });
  }
};

export const getAllLoaiTienController = async (req, res) => {
  try {
    const teamList = await getAllLoaiTienService();
    res.status(200).json(teamList);
  } catch (error) {
    res.status(500).json({
      message: 'Lỗi khi lấy danh sách bản ghi LoaiTien: ' + error.message,
    });
  }
};

export const updateLoaiTienController = async (req, res) => {
  const data = req.body;
  try {
    const team = await updateLoaiTienService(data);
    res.status(200).json(team);
  } catch (error) {
    res.status(404).json({
      message: 'Bản ghi LoaiTien không tồn tại hoặc lỗi khi cập nhật: ' + error.message,
    });
  }
};

export const deleteLoaiTienController = async (req, res) => {
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
    const result = await deleteLoaiTienService(ids);
    res.status(200).json(result);
  } catch (error) {
    res.status(404).json({
      message: 'Bản ghi LoaiTien không tồn tại hoặc lỗi khi xóa: ' + error.message,
    });
  }
};