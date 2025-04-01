import {
  createKTQTPlanService,
  deleteKTQTPlanService,
  getAllKTQTPlanService,
  getKTQTPlanByIdService,
  updateKTQTPlanService
} from "../services/ktqtPlanService.js";


export const createKTQTPlanController = async (req, res) => {
  const data = req.body;
  try {
    const team = await createKTQTPlanService(data);
    res.status(201).json(team);
  } catch (error) {
    res.status(500).json({
      message: 'Lỗi khi tạo bản ghi KTQTPlan: ' + error.message
    });
  }
};

export const getKTQTPlanByIdController = async (req, res) => {
  const {
    id
  } = req.body;
  try {
    const team = await getKTQTPlanByIdService(id);
    res.status(200).json(team);
  } catch (error) {
    res.status(404).json({
      message: 'Bản ghi KTQTPlan không tồn tại: ' + error.message
    });
  }
};

export const getAllKTQTPlanController = async (req, res) => {
  try {
    const teamList = await getAllKTQTPlanService();
    res.status(200).json(teamList);
  } catch (error) {
    res.status(500).json({
      message: 'Lỗi khi lấy danh sách bản ghi KTQTPlan: ' + error.message,
    });
  }
};

export const updateKTQTPlanController = async (req, res) => {
  const data = req.body;
  try {
    const team = await updateKTQTPlanService(data);
    res.status(200).json(team);
  } catch (error) {
    res.status(404).json({
      message: 'Bản ghi KTQTPlan không tồn tại hoặc lỗi khi cập nhật: ' + error.message,
    });
  }
};

export const deleteKTQTPlanController = async (req, res) => {
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
    const result = await deleteKTQTPlanService(ids);
    res.status(200).json(result);
  } catch (error) {
    res.status(404).json({
      message: 'Bản ghi KTQTPlan không tồn tại hoặc lỗi khi xóa: ' + error.message,
    });
  }
};