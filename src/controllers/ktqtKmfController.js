import {
  createKTQTKmfService,
  getKTQTKmfByIdService,
  getAllKTQTKmfService,
  updateKTQTKmfService,
  deleteKTQTKmfService,
} from '../services/ktqtKmfService.js';

export const createKTQTKmfController = async (req, res) => {
  const data = req.body;
  try {
    const team = await createKTQTKmfService(data);
    res.status(201).json(team);
  } catch (error) {
    res.status(500).json({
      message: 'Lỗi khi tạo bản ghi KTQTKmf: ' + error.message
    });
  }
};

export const getKTQTKmfByIdController = async (req, res) => {
  const {
    id
  } = req.body;
  try {
    const team = await getKTQTKmfByIdService(id);
    res.status(200).json(team);
  } catch (error) {
    res.status(404).json({
      message: 'Bản ghi KTQTKmf không tồn tại: ' + error.message
    });
  }
};

export const getAllKTQTKmfController = async (req, res) => {
  try {
    const teamList = await getAllKTQTKmfService();
    res.status(200).json(teamList);
  } catch (error) {
    res.status(500).json({
      message: 'Lỗi khi lấy danh sách bản ghi KTQTKmf: ' + error.message,
    });
  }
};

export const updateKTQTKmfController = async (req, res) => {
  const data = req.body;
  try {
    const team = await updateKTQTKmfService(data);
    res.status(200).json(team);
  } catch (error) {
    res.status(404).json({
      message: 'Bản ghi KTQTKmf không tồn tại hoặc lỗi khi cập nhật: ' + error.message,
    });
  }
};

export const deleteKTQTKmfController = async (req, res) => {
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
    const result = await deleteKTQTKmfService(ids);
    res.status(200).json(result);
  } catch (error) {
    res.status(404).json({
      message: 'Bản ghi KTQTKmf không tồn tại hoặc lỗi khi xóa: ' + error.message,
    });
  }
};