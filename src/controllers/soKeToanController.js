import {
  createSoKeToanService,
  getSoKeToanByIdService,
  getAllSoKeToanService,
  updateSoKeToanService,
  deleteSoKeToanService,
  deleteSoKeToanByMonthService,
  deleteAllSoKeToanService,
  findLastUpdate,
  findLastId,
  deleteByDaDung1Service,
} from '../services/soKeToanService.js';

export const createSoKeToanController = async (req, res) => {
  const data = req.body;
  try {
    const team = await createSoKeToanService(data);
    res.status(201).json(team);
  } catch (error) {
    res.status(500).json({
      message: 'Lỗi khi tạo bản ghi SoKeToan: ' + error.message
    });
  }
};

export const getSoKeToanByIdController = async (req, res) => {
  const {
    id
  } = req.body;
  try {
    const team = await getSoKeToanByIdService(id);
    res.status(200).json(team);
  } catch (error) {
    res.status(404).json({
      message: 'Bản ghi SoKeToan không tồn tại: ' + error.message
    });
  }
};

export const getAllSoKeToanController = async (req, res) => {
  try {
    const teamList = await getAllSoKeToanService();
    res.status(200).json(teamList);
  } catch (error) {
    res.status(500).json({
      message: 'Lỗi khi lấy danh sách bản ghi SoKeToan: ' + error.message,
    });
  }
};


export const updateSoKeToanController = async (req, res) => {
  const data = req.body;
  try {
    const team = await updateSoKeToanService(data);
    res.status(200).json(team);
  } catch (error) {
    res.status(404).json({
      message: 'Bản ghi SoKeToan không tồn tại hoặc lỗi khi cập nhật: ' + error.message,
    });
  }
};

export const deleteSoKeToanServiceController = async (req, res) => {
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
    const result = await deleteSoKeToanService(ids);
    res.status(200).json(result);
  } catch (error) {
    res.status(404).json({
      message: 'Bản ghi SoKeToan không tồn tại hoặc lỗi khi xóa: ' + error.message,
    });
  }
};
export const deleteSoKeToanByMonthController = async (req, res) => {
  let month = req.params.month;
  let company = req.params.company;
  if (!Array.isArray(month) && !Array.isArray(company)) {
    month = [month];
    company = [company];
  }

  if (month.length === 0 && company.length === 0) {
    return res.status(400).json({
      message: 'Yêu cầu không hợp lệ: cần một hoặc nhiều ID.'
    });
  }

  try {
    const result = await deleteSoKeToanByMonthService(month, company);
    res.status(200).json(result);
  } catch (error) {
    res.status(404).json({
      message: 'Bản ghi SoKeToan không tồn tại hoặc lỗi khi xóa: ' + error.message,
    });
  }
};

export const deleteAllSoKeToanController = async (req, res) => {
  let company = req.params.company;
  try {
    const result = await deleteAllSoKeToanService(company);
    res.status(200).json(result);
  } catch (error) {
    res.status(404).json({
      message: 'Bản ghi SoKeToan không tồn tại hoặc lỗi khi xóa: ' + error.message,
    });
  }
};

export const getLastUpdateSoKeToanController = async (req, res) => {
  try {
    const lastUpdate = await findLastUpdate();
    res.status(200).json(lastUpdate);
  } catch (error) {
    res.status(500).json({
      message: 'Lỗi khi lấy danh sách bản ghi SoKeToan: ' + error.message,
    });
  }
};
export const getLastIdSoKeToanController = async (req, res) => {
  try {
    const lastUpdate = await findLastId();
    res.status(200).json(lastUpdate);
  } catch (error) {
    res.status(500).json({
      message: 'Lỗi khi lấy danh sách bản ghi SoKeToan: ' + error.message,
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