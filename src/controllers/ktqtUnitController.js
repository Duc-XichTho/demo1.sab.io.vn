import {
  createKTQTUnitService,
  getKTQTUnitByIdService,
  getAllKTQTUnitService,
  updateKTQTUnitService,
  deleteKTQTUnitService,
} from '../services/ktqtUnitService.js';

export const createTeamController = async (req, res) => {
  const data = req.body;
  try {
    const team = await createKTQTUnitService(data);
    res.status(201).json(team);
  } catch (error) {
    res.status(500).json({
      message: 'Lỗi khi tạo bản ghi Team: ' + error.message
    });
  }
};

export const getTeamByIdController = async (req, res) => {
  const {
    id
  } = req.body;
  try {
    const team = await getKTQTUnitByIdService(id);
    res.status(200).json(team);
  } catch (error) {
    res.status(404).json({
      message: 'Bản ghi Team không tồn tại: ' + error.message
    });
  }
};

export const getAllTeamController = async (req, res) => {
  try {
    const teamList = await getAllKTQTUnitService();
    res.status(200).json(teamList);
  } catch (error) {
    res.status(500).json({
      message: 'Lỗi khi lấy danh sách bản ghi Team: ' + error.message,
    });
  }
};

export const updateTeamController = async (req, res) => {
  const data = req.body;
  try {
    const team = await updateKTQTUnitService(data);
    res.status(200).json(team);
  } catch (error) {
    res.status(404).json({
      message: 'Bản ghi Team không tồn tại hoặc lỗi khi cập nhật: ' + error.message,
    });
  }
};

export const deleteTeamController = async (req, res) => {
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
    const result = await deleteKTQTUnitService(ids);
    res.status(200).json(result);
  } catch (error) {
    res.status(404).json({
      message: 'Bản ghi Team không tồn tại hoặc lỗi khi xóa: ' + error.message,
    });
  }
};