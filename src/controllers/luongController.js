import {
  createLuongService,
  deleteLuongService,
  getAllLuongService,
  getLuongByIdService,
  updateLuongService
} from "../services/luongService.js";

export const createLuongController = async (req, res) => {
  const data = req.body;
  try {
    const team = await createLuongService(data);
    res.status(201).json(team);
  } catch (error) {
    res.status(500).json({
      message: 'Lỗi khi tạo bản ghi Team: ' + error.message
    });
  }
};

export const getLuongByIdController = async (req, res) => {
  const {
    id
  } = req.body;
  try {
    const team = await getLuongByIdService(id);
    res.status(200).json(team);
  } catch (error) {
    res.status(404).json({
      message: 'Bản ghi Team không tồn tại: ' + error.message
    });
  }
};

export const getAllLuongController = async (req, res) => {
  try {
    const teamList = await getAllLuongService();
    res.status(200).json(teamList);
  } catch (error) {
    res.status(500).json({
      message: 'Lỗi khi lấy danh sách bản ghi Team: ' + error.message,
    });
  }
};

export const updateLuongController = async (req, res) => {
  const data = req.body;
  try {
    const team = await updateLuongService(data);
    res.status(200).json(team);
  } catch (error) {
    res.status(404).json({
      message: 'Bản ghi Team không tồn tại hoặc lỗi khi cập nhật: ' + error.message,
    });
  }
};

export const deleteLuongController = async (req, res) => {
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
    const result = await deleteLuongService(ids);
    res.status(200).json(result);
  } catch (error) {
    res.status(404).json({
      message: 'Bản ghi Team không tồn tại hoặc lỗi khi xóa: ' + error.message,
    });
  }
};