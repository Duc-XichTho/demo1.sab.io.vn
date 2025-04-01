import {
  createKTQTSoKeToanService,
  getKTQTSoKeToanByIdService,
  getAllKTQTSoKeToanService,
  updateKTQTSoKeToanService,
  deleteKTQTSoKeToanService,
  deleteKTQTSoKeToanByMonthService,
  deleteAllKTQTSoKeToanService,
  findLastUpdate,
  findLastId,
  deleteByDaDung1Service,
  deleteKTQTSoKeToanByYearService, getUpdatedKTQTSoKeToanService, getCountSoKeToanService,
} from '../services/ktqtSoKeToanService.js';

export const createKTQTSoKeToanController = async (req, res) => {
  const data = req.body;
  try {
    const team = await createKTQTSoKeToanService(data);
    res.status(201).json(team);
  } catch (error) {
    res.status(500).json({
      message: 'Lỗi khi tạo bản ghi KTQTSoKeToan: ' + error.message
    });
  }
};

export const getKTQTSoKeToanByIdController = async (req, res) => {
  const {
    id
  } = req.body;
  try {
    const team = await getKTQTSoKeToanByIdService(id);
    res.status(200).json(team);
  } catch (error) {
    res.status(404).json({
      message: 'Bản ghi KTQTSoKeToan không tồn tại: ' + error.message
    });
  }
};

export const getAllKTQTSoKeToanController = async (req, res) => {
  try {
    const teamList = await getAllKTQTSoKeToanService();
    res.status(200).json(teamList);
  } catch (error) {
    res.status(500).json({
      message: 'Lỗi khi lấy danh sách bản ghi KTQTSoKeToan: ' + error.message,
    });
  }
};


export const updateKTQTSoKeToanController = async (req, res) => {
  const data = req.body;
  try {
    const team = await updateKTQTSoKeToanService(data);
    res.status(200).json(team);
  } catch (error) {
    res.status(404).json({
      message: 'Bản ghi KTQTSoKeToan không tồn tại hoặc lỗi khi cập nhật: ' + error.message,
    });
  }
};

export const deleteKTQTSoKeToanServiceController = async (req, res) => {
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
    const result = await deleteKTQTSoKeToanService(ids);
    res.status(200).json(result);
  } catch (error) {
    res.status(404).json({
      message: 'Bản ghi KTQTSoKeToan không tồn tại hoặc lỗi khi xóa: ' + error.message,
    });
  }
};
export const deleteKTQTSoKeToanByMonthController = async (req, res) => {
  let month = req.params.month;
  let year = req.params.year;
  let company = req.params.company;


  try {
    const result = await deleteKTQTSoKeToanByMonthService(month, year,company);
    res.status(200).json(result);
  } catch (error) {
    res.status(404).json({
      message: 'Bản ghi KTQTSoKeToan không tồn tại hoặc lỗi khi xóa: ' + error.message,
    });
  }
};
export const deleteKTQTSoKeToanByYearController = async (req, res) => {
  let year = req.params.year;
  let company = req.params.company;


  try {
    const result = await deleteKTQTSoKeToanByYearService(year,company);
    res.status(200).json(result);
  } catch (error) {
    res.status(404).json({
      message: 'Bản ghi KTQTSoKeToan không tồn tại hoặc lỗi khi xóa: ' + error.message,
    });
  }
};

export const deleteAllKTQTSoKeToanController = async (req, res) => {

  try {
    const result = await deleteAllKTQTSoKeToanService();
    res.status(200).json(result);
  } catch (error) {
    res.status(404).json({
      message: 'Bản ghi KTQTSoKeToan không tồn tại hoặc lỗi khi xóa: ' + error.message,
    });
  }
};

export const getLastUpdateKTQTSoKeToanController = async (req, res) => {
  try {
    const lastUpdate = await findLastUpdate();
    res.status(200).json(lastUpdate);
  } catch (error) {
    res.status(500).json({
      message: 'Lỗi khi lấy danh sách bản ghi KTQTSoKeToan: ' + error.message,
    });
  }
};
export const getLastIdKTQTSoKeToanController = async (req, res) => {
  try {
    const lastUpdate = await findLastId();
    res.status(200).json(lastUpdate);
  } catch (error) {
    res.status(500).json({
      message: 'Lỗi khi lấy danh sách bản ghi KTQTSoKeToan: ' + error.message,
    });
  }
};

export const deleteByDaDung1Controller = async (req, res) => {
  const {
    da_dung_1
  } = req.params;

  try {
    const result = await deleteByDaDung1Service(da_dung_1);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({
      message: 'Lỗi khi ẩn các bản ghi: ' + error.message
    });
  }
};

export const getUpdatedKTQTSoKeToanController = async (req, res) => {
  const { lastUpdated } = req.query;
  try {
    const updates = await getUpdatedKTQTSoKeToanService(lastUpdated);
    res.status(200).json(updates);
  } catch (error) {
    res.status(500).json({
      message: 'Lỗi khi lấy bản ghi mới cập nhật: ' + error.message,
    });
  }
};

export const getCountSoKeToanController = async (req, res) => {
  try {
    const count = await getCountSoKeToanService();
    res.status(200).json({ count });
  } catch (error) {
    res.status(500).json({ message: "Lỗi server khi lấy số lượng bản ghi." });
  }
};