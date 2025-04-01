import {
  createVasService,
  getVasByIdService,
  getAllVasService,
  updateVasService,
  deleteVasService,
} from '../services/vasService.js';

export const createVasController = async (req, res) => {
  const data = req.body;
  try {
    const vas = await createVasService(data);
    res.status(201).json(vas);
  } catch (error) {
    res.status(500).json({ message: 'Lỗi khi tạo bản ghi Vas: ' + error.message });
  }
};

export const getVasByIdController = async (req, res) => {
  const { id } = req.body;
  try {
    const vas = await getVasByIdService(id);
    res.status(200).json(vas);
  } catch (error) {
    res.status(404).json({ message: 'Bản ghi Vas không tồn tại: ' + error.message });
  }
};

export const getAllVasController = async (req, res) => {
  try {
    const vasList = await getAllVasService();
    res.status(200).json(vasList);
  } catch (error) {
    res.status(500).json({ message: 'Lỗi khi lấy danh sách bản ghi Vas: ' + error.message });
  }
};

export const updateVasController = async (req, res) => {
  const data = req.body;
  try {
    const vas = await updateVasService(data);
    res.status(200).json(vas);
  } catch (error) {
    res.status(404).json({
      message: 'Bản ghi Vas không tồn tại hoặc lỗi khi cập nhật: ' + error.message,
    });
  }
};

export const deleteVasController = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ message: 'Yêu cầu không hợp lệ: cần một ID.' });
  }

  try {
    const result = await deleteVasService(id);
    res.status(200).json(result);
  } catch (error) {
    res.status(404).json({
      message: 'Bản ghi Vas không tồn tại hoặc lỗi khi xóa: ' + error.message,
    });
  }
};
