import {
  createKTQTVendorService,
  deleteKTQTVendorService,
  getAllKTQTVendorService,
  getKTQTVendorByIdService,
  updateKTQTVendorService
} from "../services/ktqtVendorService.js";

export const createKTQTVendorController = async (req, res) => {
  const data = req.body;
  try {
    const team = await createKTQTVendorService(data);
    res.status(201).json(team);
  } catch (error) {
    res.status(500).json({
      message: 'Lỗi khi tạo bản ghi Product: ' + error.message
    });
  }
};

export const getKTQTVendorByIdController = async (req, res) => {
  const {
    id
  } = req.body;
  try {
    const team = await getKTQTVendorByIdService(id);
    res.status(200).json(team);
  } catch (error) {
    res.status(404).json({
      message: 'Bản ghi Product không tồn tại: ' + error.message
    });
  }
};

export const getAllKTQTVendorController = async (req, res) => {
  try {
    const teamList = await getAllKTQTVendorService();
    res.status(200).json(teamList);
  } catch (error) {
    res.status(500).json({
      message: 'Lỗi khi lấy danh sách bản ghi Product: ' + error.message,
    });
  }
};

export const updateKTQTVendorController = async (req, res) => {
  const data = req.body;
  try {
    const team = await updateKTQTVendorService(data);
    res.status(200).json(team);
  } catch (error) {
    res.status(404).json({
      message: 'Bản ghi không tồn tại hoặc lỗi khi cập nhật: ' + error.message,
    });
  }
};

export const deleteKTQTVendorController = async (req, res) => {
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
    const result = await deleteKTQTVendorService(ids);
    res.status(200).json(result);
  } catch (error) {
    res.status(404).json({
      message: 'Bản ghi Product không tồn tại hoặc lỗi khi xóa: ' + error.message,
    });
  }
};
