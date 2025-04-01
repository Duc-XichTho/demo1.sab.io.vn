import {
  createKenhService,
  getKenhByIdService,
  getAllKenhService,
  updateKenhService,
  deleteKenhService,
} from '../services/kenhService.js';

export const createKenhController = async (req, res) => {
  const data = req.body;
  try {
    const team = await createKenhService(data);
    res.status(201).json(team);
  } catch (error) {
    res.status(500).json({
      message: 'Lỗi khi tạo bản ghi Kenh: ' + error.message
    });
  }
};

export const getKenhByIdController = async (req, res) => {
  const {
    id
  } = req.body;
  try {
    const team = await getKenhByIdService(id);
    res.status(200).json(team);
  } catch (error) {
    res.status(404).json({
      message: 'Bản ghi Kenh không tồn tại: ' + error.message
    });
  }
};

export const getAllKenhController = async (req, res) => {
  try {
    const teamList = await getAllKenhService();
    res.status(200).json(teamList);
  } catch (error) {
    res.status(500).json({
      message: 'Lỗi khi lấy danh sách bản ghi Kenh: ' + error.message,
    });
  }
};

export const updateKenhController = async (req, res) => {
  const data = req.body;
  try {
    const team = await updateKenhService(data);
    res.status(200).json(team);
  } catch (error) {
    res.status(404).json({
      message: 'Bản ghi Kenh không tồn tại hoặc lỗi khi cập nhật: ' + error.message,
    });
  }
};

export const deleteKenhController = async (req, res) => {
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
    const result = await deleteKenhService(ids);
    res.status(200).json(result);
  } catch (error) {
    res.status(404).json({
      message: 'Bản ghi Kenh không tồn tại hoặc lỗi khi xóa: ' + error.message,
    });
  }
};