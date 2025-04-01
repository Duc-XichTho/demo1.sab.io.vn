import {
  createKTQTKenhService,
  getKTQTKenhByIdService,
  getAllKTQTKenhService,
  updateKTQTKenhService,
  deleteKTQTKenhService,
} from '../services/ktqtKenhService.js';

export const createKTQTKenhController = async (req, res) => {
  const data = req.body;
  try {
    const team = await createKTQTKenhService(data);
    res.status(201).json(team);
  } catch (error) {
    res.status(500).json({
      message: 'Lỗi khi tạo bản ghi KTQTKenh: ' + error.message
    });
  }
};

export const getKTQTKenhByIdController = async (req, res) => {
  const {
    id
  } = req.body;
  try {
    const team = await getKTQTKenhByIdService(id);
    res.status(200).json(team);
  } catch (error) {
    res.status(404).json({
      message: 'Bản ghi KTQTKenh không tồn tại: ' + error.message
    });
  }
};

export const getAllKTQTKenhController = async (req, res) => {
  try {
    const teamList = await getAllKTQTKenhService();
    res.status(200).json(teamList);
  } catch (error) {
    res.status(500).json({
      message: 'Lỗi khi lấy danh sách bản ghi KTQTKenh: ' + error.message,
    });
  }
};

export const updateKTQTKenhController = async (req, res) => {
  const data = req.body;
  try {
    const team = await updateKTQTKenhService(data);
    res.status(200).json(team);
  } catch (error) {
    res.status(404).json({
      message: 'Bản ghi KTQTKenh không tồn tại hoặc lỗi khi cập nhật: ' + error.message,
    });
  }
};

export const deleteKTQTKenhController = async (req, res) => {
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
    const result = await deleteKTQTKenhService(ids);
    res.status(200).json(result);
  } catch (error) {
    res.status(404).json({
      message: 'Bản ghi KTQTKenh không tồn tại hoặc lỗi khi xóa: ' + error.message,
    });
  }
};