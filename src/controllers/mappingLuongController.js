import {
  createMappingLuongService,
  deleteMappingLuongService,
  getAllMappingLuongService,
  getMappingLuongByIdService,
  updateMappingLuongService
} from "../services/mappingLuongService.js";

export const createMappingLuongController = async (req, res) => {
  const data = req.body;
  try {
    const team = await createMappingLuongService(data);
    res.status(201).json(team);
  } catch (error) {
    res.status(500).json({
      message: 'Lỗi khi tạo bản ghi Team: ' + error.message
    });
  }
};

export const getMappingLuongByIdController = async (req, res) => {
  const {
    id
  } = req.body;
  try {
    const team = await getMappingLuongByIdService(id);
    res.status(200).json(team);
  } catch (error) {
    res.status(404).json({
      message: 'Bản ghi Team không tồn tại: ' + error.message
    });
  }
};

export const getAllMappingLuongController = async (req, res) => {
  try {
    const teamList = await getAllMappingLuongService();
    res.status(200).json(teamList);
  } catch (error) {
    res.status(500).json({
      message: 'Lỗi khi lấy danh sách bản ghi Team: ' + error.message,
    });
  }
};

export const updateMappingLuongController = async (req, res) => {
  const data = req.body;
  try {
    const team = await updateMappingLuongService(data);
    res.status(200).json(team);
  } catch (error) {
    res.status(404).json({
      message: 'Bản ghi Team không tồn tại hoặc lỗi khi cập nhật: ' + error.message,
    });
  }
};

export const deleteMappingLuongController = async (req, res) => {
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
    const result = await deleteMappingLuongService(ids);
    res.status(200).json(result);
  } catch (error) {
    res.status(404).json({
      message: 'Bản ghi Team không tồn tại hoặc lỗi khi xóa: ' + error.message,
    });
  }
};