import {
  createPhongBanService,
  getPhongBanByIdService,
  getAllPhongBanService,
  updatePhongBanService,
  deletePhongBanService,
} from '../services/phongBanService.js';

export const createPhongBanController = async (req, res) => {
  const data = req.body;
  try {
    const team = await createPhongBanService(data);
    res.status(201).json(team);
  } catch (error) {
    res.status(500).json({
      message: 'Lỗi khi tạo bản ghi PhongBan: ' + error.message
    });
  }
};

export const getPhongBanByIdController = async (req, res) => {
  const {
    id
  } = req.body;
  try {
    const team = await getPhongBanByIdService(id);
    res.status(200).json(team);
  } catch (error) {
    res.status(404).json({
      message: 'Bản ghi PhongBan không tồn tại: ' + error.message
    });
  }
};

export const getAllPhongBanController = async (req, res) => {
  try {
    const teamList = await getAllPhongBanService();
    res.status(200).json(teamList);
  } catch (error) {
    res.status(500).json({
      message: 'Lỗi khi lấy danh sách bản ghi PhongBan: ' + error.message,
    });
  }
};

export const updatePhongBanController = async (req, res) => {
  const data = req.body;
  try {
    const team = await updatePhongBanService(data);
    res.status(200).json(team);
  } catch (error) {
    res.status(404).json({
      message: 'Bản ghi PhongBan không tồn tại hoặc lỗi khi cập nhật: ' + error.message,
    });
  }
};

export const deletePhongBanController = async (req, res) => {
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
    const result = await deletePhongBanService(ids);
    res.status(200).json(result);
  } catch (error) {
    res.status(404).json({
      message: 'Bản ghi PhongBan không tồn tại hoặc lỗi khi xóa: ' + error.message,
    });
  }
};