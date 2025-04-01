import {
  createKTQTKmnsService,
  getKTQTKmnsByIdService,
  getAllKTQTKmnsService,
  updateKTQTKmnsService,
  deleteKTQTKmnsService,
} from '../services/ktqtKmnsService.js';

export const createKTQTKmnsController = async (req, res) => {
  const data = req.body;
  try {
    const team = await createKTQTKmnsService(data);
    res.status(201).json(team);
  } catch (error) {
    res.status(500).json({
      message: 'Lỗi khi tạo bản ghi KTQTKmns: ' + error.message
    });
  }
};

export const getKTQTKmnsByIdController = async (req, res) => {
  const {
    id
  } = req.body;
  try {
    const team = await getKTQTKmnsByIdService(id);
    res.status(200).json(team);
  } catch (error) {
    res.status(404).json({
      message: 'Bản ghi KTQTKmns không tồn tại: ' + error.message
    });
  }
};

export const getAllKTQTKmnsController = async (req, res) => {
  try {
    const teamList = await getAllKTQTKmnsService();
    res.status(200).json(teamList);
  } catch (error) {
    res.status(500).json({
      message: 'Lỗi khi lấy danh sách bản ghi KTQTKmns: ' + error.message,
    });
  }
};

export const updateKTQTKmnsController = async (req, res) => {
  const data = req.body;
  try {
    const team = await updateKTQTKmnsService(data);
    res.status(200).json(team);
  } catch (error) {
    res.status(404).json({
      message: 'Bản ghi KTQTKmns không tồn tại hoặc lỗi khi cập nhật: ' + error.message,
    });
  }
};

export const deleteKTQTKmnsController = async (req, res) => {
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
    const result = await deleteKTQTKmnsService(ids);
    res.status(200).json(result);
  } catch (error) {
    res.status(404).json({
      message: 'Bản ghi KTQTKmns không tồn tại hoặc lỗi khi xóa: ' + error.message,
    });
  }
};