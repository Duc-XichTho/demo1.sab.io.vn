import {
  createKTQTTeamService,
  getKTQTTeamByIdService,
  getAllKTQTTeamService,
  updateKTQTTeamService,
  deleteKTQTTeamService,
} from '../services/ktqtTeamService.js';

export const createKTQTTeamController = async (req, res) => {
  const data = req.body;
  try {
    const KTQTTeam = await createKTQTTeamService(data);
    res.status(201).json(KTQTTeam);
  } catch (error) {
    res.status(500).json({
      message: 'Lỗi khi tạo bản ghi KTQTTeam: ' + error.message
    });
  }
};

export const getKTQTTeamByIdController = async (req, res) => {
  const {
    id
  } = req.body;
  try {
    const KTQTTeam = await getKTQTTeamByIdService(id);
    res.status(200).json(KTQTTeam);
  } catch (error) {
    res.status(404).json({
      message: 'Bản ghi KTQTTeam không tồn tại: ' + error.message
    });
  }
};

export const getAllKTQTTeamController = async (req, res) => {
  try {
    const KTQTTeamList = await getAllKTQTTeamService();
    res.status(200).json(KTQTTeamList);
  } catch (error) {
    res.status(500).json({
      message: 'Lỗi khi lấy danh sách bản ghi KTQTTeam: ' + error.message,
    });
  }
};

export const updateKTQTTeamController = async (req, res) => {
  const data = req.body;
  try {
    const KTQTTeam = await updateKTQTTeamService(data);
    res.status(200).json(KTQTTeam);
  } catch (error) {
    res.status(404).json({
      message: 'Bản ghi KTQTTeam không tồn tại hoặc lỗi khi cập nhật: ' + error.message,
    });
  }
};

export const deleteKTQTTeamController = async (req, res) => {
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
    const result = await deleteKTQTTeamService(ids);
    res.status(200).json(result);
  } catch (error) {
    res.status(404).json({
      message: 'Bản ghi KTQTTeam không tồn tại hoặc lỗi khi xóa: ' + error.message,
    });
  }
};