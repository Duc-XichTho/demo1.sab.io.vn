import {
  createKTQTProductService,
  getKTQTProductByIdService,
  getAllKTQTProductService,
  updateKTQTProductService,
  deleteKTQTProductService,
} from '../services/ktqtProductService.js';

export const createKTQTProductController = async (req, res) => {
  const data = req.body;
  try {
    const team = await createKTQTProductService(data);
    res.status(201).json(team);
  } catch (error) {
    res.status(500).json({
      message: 'Lỗi khi tạo bản ghi KTQTProduct: ' + error.message
    });
  }
};

export const getKTQTProductByIdController = async (req, res) => {
  const {
    id
  } = req.body;
  try {
    const team = await getKTQTProductByIdService(id);
    res.status(200).json(team);
  } catch (error) {
    res.status(404).json({
      message: 'Bản ghi KTQTProduct không tồn tại: ' + error.message
    });
  }
};

export const getAllKTQTProductController = async (req, res) => {
  try {
    const teamList = await getAllKTQTProductService();
    res.status(200).json(teamList);
  } catch (error) {
    res.status(500).json({
      message: 'Lỗi khi lấy danh sách bản ghi KTQTProduct: ' + error.message,
    });
  }
};

export const updateKTQTProductController = async (req, res) => {
  const data = req.body;
  try {
    const team = await updateKTQTProductService(data);
    res.status(200).json(team);
  } catch (error) {
    res.status(404).json({
      message: 'Bản ghi KTQTProduct không tồn tại hoặc lỗi khi cập nhật: ' + error.message,
    });
  }
};

export const deleteKTQTProductController = async (req, res) => {
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
    const result = await deleteKTQTProductService(ids);
    res.status(200).json(result);
  } catch (error) {
    res.status(404).json({
      message: 'Bản ghi KTQTProduct không tồn tại hoặc lỗi khi xóa: ' + error.message,
    });
  }
};