import {
  createDonViTinhService,
  getDonViTinhByIdService,
  getAllDonViTinhService,
  updateDonViTinhService,
  deleteDonViTinhService,
} from '../services/donViTinhService.js';

export const createDonViTinhController = async (req, res) => {
  const data = req.body;
  try {
    const team = await createDonViTinhService(data);
    res.status(201).json(team);
  } catch (error) {
    res.status(500).json({
      message: 'Lỗi khi tạo bản ghi DonViTinh: ' + error.message
    });
  }
};

export const getDonViTinhByIdController = async (req, res) => {
  const {
    id
  } = req.body;
  try {
    const team = await getDonViTinhByIdService(id);
    res.status(200).json(team);
  } catch (error) {
    res.status(404).json({
      message: 'Bản ghi DonViTinh không tồn tại: ' + error.message
    });
  }
};

export const getAllDonViTinhController = async (req, res) => {
  try {
    const teamList = await getAllDonViTinhService();
    res.status(200).json(teamList);
  } catch (error) {
    res.status(500).json({
      message: 'Lỗi khi lấy danh sách bản ghi DonViTinh: ' + error.message,
    });
  }
};

export const updateDonViTinhController = async (req, res) => {
  const data = req.body;
  try {
    const team = await updateDonViTinhService(data);
    res.status(200).json(team);
  } catch (error) {
    res.status(404).json({
      message: 'Bản ghi DonViTinh không tồn tại hoặc lỗi khi cập nhật: ' + error.message,
    });
  }
};

export const deleteDonViTinhController = async (req, res) => {
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
    const result = await deleteDonViTinhService(ids);
    res.status(200).json(result);
  } catch (error) {
    res.status(404).json({
      message: 'Bản ghi DonViTinh không tồn tại hoặc lỗi khi xóa: ' + error.message,
    });
  }
};