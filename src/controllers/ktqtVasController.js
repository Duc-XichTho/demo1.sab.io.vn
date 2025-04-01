import {
  createKTQTVasService,
  getKTQTVasByIdService,
  getAllKTQTVasService,
  updateKTQTVasService,
  deleteKTQTVasService,
} from '../services/ktqtVasService.js';

export const createKTQTVasController = async (req, res) => {
  const data = req.body;
  try {
    const KTQTVas = await createKTQTVasService(data);
    res.status(201).json(KTQTVas);
  } catch (error) {
    res.status(500).json({ message: 'Lỗi khi tạo bản ghi KTQTVas: ' + error.message });
  }
};

export const getKTQTVasByIdController = async (req, res) => {
  const { id } = req.body;
  try {
    const KTQTVas = await getKTQTVasByIdService(id);
    res.status(200).json(KTQTVas);
  } catch (error) {
    res.status(404).json({ message: 'Bản ghi KTQTVas không tồn tại: ' + error.message });
  }
};

export const getAllKTQTVasController = async (req, res) => {
  try {
    const KTQTVasList = await getAllKTQTVasService();
    res.status(200).json(KTQTVasList);
  } catch (error) {
    res.status(500).json({ message: 'Lỗi khi lấy danh sách bản ghi KTQTVas: ' + error.message });
  }
};

export const updateKTQTVasController = async (req, res) => {
  const data = req.body;
  try {
    const KTQTVas = await updateKTQTVasService(data);
    res.status(200).json(KTQTVas);
  } catch (error) {
    res.status(404).json({
      message: 'Bản ghi KTQTVas không tồn tại hoặc lỗi khi cập nhật: ' + error.message,
    });
  }
};

export const deleteKTQTVasController = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ message: 'Yêu cầu không hợp lệ: cần một ID.' });
  }

  try {
    const result = await deleteKTQTVasService(id);
    res.status(200).json(result);
  } catch (error) {
    res.status(404).json({
      message: 'Bản ghi KTQTVas không tồn tại hoặc lỗi khi xóa: ' + error.message,
    });
  }
};
