import {
  createKTQTCoChePhanBoService,
  getKTQTCoChePhanBoByIdService,
  getAllKTQTCoChePhanBoService,
  updateKTQTCoChePhanBoService,
  deleteKTQTCoChePhanBoService,
} from '../services/ktqtCoChePhanBoService.js';

export const createKTQTCoChePhanBoController = async (req, res) => {
  const data = req.body;
  try {
    const team = await createKTQTCoChePhanBoService(data);
    res.status(201).json(team);
  } catch (error) {
    res.status(500).json({
      message: 'Lỗi khi tạo bản ghi KTQTCoChePhanBo: ' + error.message
    });
  }
};

export const getKTQTCoChePhanBoByIdController = async (req, res) => {
  const {
    id
  } = req.body;
  try {
    const team = await getKTQTCoChePhanBoByIdService(id);
    res.status(200).json(team);
  } catch (error) {
    res.status(404).json({
      message: 'Bản ghi KTQTCoChePhanBo không tồn tại: ' + error.message
    });
  }
};

export const getAllKTQTCoChePhanBoController = async (req, res) => {
  try {
    const data = await getAllKTQTCoChePhanBoService();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({
      message: 'Lỗi khi lấy danh sách bản ghi KTQTCoChePhanBo: ' + error.message,
    });
  }
};

export const updateKTQTCoChePhanBoController = async (req, res) => {
  const data = req.body;
  try {
    const team = await updateKTQTCoChePhanBoService(data);
    res.status(200).json(team);
  } catch (error) {
    res.status(404).json({
      message: 'Bản ghi KTQTCoChePhanBo không tồn tại hoặc lỗi khi cập nhật: ' + error.message,
    });
  }
};

export const deleteKTQTCoChePhanBoController = async (req, res) => {
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
    const result = await deleteKTQTCoChePhanBoService(ids);
    res.status(200).json(result);
  } catch (error) {
    res.status(404).json({
      message: 'Bản ghi KTQTCoChePhanBo không tồn tại hoặc lỗi khi xóa: ' + error.message,
    });
  }
};