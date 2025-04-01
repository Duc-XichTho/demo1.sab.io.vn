import * as tamUngService from '../services/tamUngService.js'

export const getAllTamUngController = async (req, res) => {
  try {
    const tamUngList = await tamUngService.getAllTamUngService();
    res.status(200).json(tamUngList);
  } catch (error) {
    res.status(500).json({
      message: 'Lỗi khi lấy danh sách bản ghi TamUng: ' + error.message,
    });
  }
};

export const createTamUngController = async (req, res) => {
  try {
    const tamUng = await tamUngService.createTamUngService(req.body);
    res.status(201).json(tamUng);
  } catch (error) {
    res.status(500).json({
      message: 'Lỗi khi tạo bản ghi TamUng: ' + error.message,
    });
  }
};

export const updateTamUngController = async (req, res) => {
  try {
    const tamUng = await tamUngService.updateTamUngService(req.body);
    res.status(200).json(tamUng);
  } catch (error) {
    res.status(500).json({
      message: 'Lỗi khi cập nhật bản ghi TamUng: ' + error.message,
    });
  }
};

export const hideTamUngController = async (req, res) => {
  try {
    const tamUng = await tamUngService.hideTamUngService(req.params.id);
    res.status(200).json(tamUng);
  } catch (error) {
    res.status(500).json({
      message: 'Lỗi khi ẩn bản ghi TamUng: ' + error.message,
    });
  }
};

export const getTamUngByCardIdServiceController = async (req, res) => {
  const { cardId } = req.params;
  try {
    const tamUng = await tamUngService.getTamUngByCardIdService(cardId);
    res.status(200).json(tamUng);
  } catch (error) {
    res.status(500).json({
      message: 'Lỗi khi lay bản ghi TamUng: ' + error.message,
    });
  }
};
