import {
  createDanhMucChungTuService,
  getDanhMucChungTuByIdService,
  getAllDanhMucChungTuService,
  updateDanhMucChungTuService,
  deleteDanhMucChungTuService,
} from '../services/danhMucChungTuService.js';

export const createDanhMucChungTuController = async (req, res) => {
  const data = req.body;
  try {
    const team = await createDanhMucChungTuService(data);
    res.status(201).json(team);
  } catch (error) {
    res.status(500).json({
      message: 'Lỗi khi tạo bản ghi DanhMucChungTu: ' + error.message
    });
  }
};

export const getDanhMucChungTuByIdController = async (req, res) => {
  const {
    id
  } = req.body;
  try {
    const team = await getDanhMucChungTuByIdService(id);
    res.status(200).json(team);
  } catch (error) {
    res.status(404).json({
      message: 'Bản ghi DanhMucChungTu không tồn tại: ' + error.message
    });
  }
};

export const getAllDanhMucChungTuController = async (req, res) => {
  try {
    const teamList = await getAllDanhMucChungTuService();
    res.status(200).json(teamList);
  } catch (error) {
    res.status(500).json({
      message: 'Lỗi khi lấy danh sách bản ghi DanhMucChungTu: ' + error.message,
    });
  }
};

export const updateDanhMucChungTuController = async (req, res) => {
  const data = req.body;
  try {
    const team = await updateDanhMucChungTuService(data);
    res.status(200).json(team);
  } catch (error) {
    res.status(404).json({
      message: 'Bản ghi DanhMucChungTu không tồn tại hoặc lỗi khi cập nhật: ' + error.message,
    });
  }
};

export const deleteDanhMucChungTuController = async (req, res) => {
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
    const result = await deleteDanhMucChungTuService(ids);
    res.status(200).json(result);
  } catch (error) {
    res.status(404).json({
      message: 'Bản ghi DanhMucChungTu không tồn tại hoặc lỗi khi xóa: ' + error.message,
    });
  }
};