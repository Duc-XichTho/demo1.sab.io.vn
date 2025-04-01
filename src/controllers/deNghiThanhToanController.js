import * as DeNghiThanhToanService from '../services/deNghiThanhToanService.js'
import {getAllDeNghiThanhToanByTamUngIdService} from "../services/deNghiThanhToanService.js";

export const getAllDeNghiThanhToanController = async (req, res) => {
  try {
    const DeNghiThanhToanList = await DeNghiThanhToanService.getAllDeNghiThanhToanService();
    res.status(200).json(DeNghiThanhToanList);
  } catch (error) {
    res.status(500).json({
      message: 'Lỗi khi lấy danh sách bản ghi DeNghiThanhToan: ' + error.message,
    });
  }
};

export const createDeNghiThanhToanController = async (req, res) => {
  try {
    const DeNghiThanhToan = await DeNghiThanhToanService.createDeNghiThanhToanService(req.body);
    res.status(201).json(DeNghiThanhToan);
  } catch (error) {
    res.status(500).json({
      message: 'Lỗi khi tạo bản ghi DeNghiThanhToan: ' + error.message,
    });
  }
};

export const updateDeNghiThanhToanController = async (req, res) => {
  try {
    const DeNghiThanhToan = await DeNghiThanhToanService.updateDeNghiThanhToanService(req.body);
    res.status(200).json(DeNghiThanhToan);
  } catch (error) {
    res.status(500).json({
      message: 'Lỗi khi cập nhật bản ghi DeNghiThanhToan: ' + error.message,
    });
  }
};

export const getAllDeNghiThanhToanByTamUngIdController = async (req, res) => {
  try {
    const DeNghiThanhToan = await DeNghiThanhToanService.getAllDeNghiThanhToanByTamUngIdService(req.params.id);
    res.status(200).json(DeNghiThanhToan);
  } catch (error) {
    res.status(500).json({
      message: 'Lỗi khi cập nhật bản ghi DeNghiThanhToan: ' + error.message,
    });
  }
};

export const hideDeNghiThanhToanController = async (req, res) => {
  try {
    const DeNghiThanhToan = await DeNghiThanhToanService.hideDeNghiThanhToanService(req.params.id);
    res.status(200).json(DeNghiThanhToan);
  } catch (error) {
    res.status(500).json({
      message: 'Lỗi khi ẩn bản ghi DeNghiThanhToan: ' + error.message,
    });
  }
};

export const getDeNghiThanhToanByCardIdServiceController = async (req, res) => {
  const { cardId } = req.params;
  try {
    const DeNghiThanhToan = await DeNghiThanhToanService.getDeNghiThanhToanByCardIdService(cardId);
    res.status(200).json(DeNghiThanhToan);
  } catch (error) {
    res.status(500).json({
      message: 'Lỗi khi ẩn bản ghi DeNghiThanhToan: ' + error.message,
    });
  }
};

export const getDeNghiThanhToanNewController = async (req, res) => {
  try {
    const DeNghiThanhToan = await DeNghiThanhToanService.getDeNghiThanhToanNewService();
    res.status(200).json(DeNghiThanhToan);
  } catch (error) {
    res.status(500).json({
      message: 'Lỗi khi ẩn bản ghi DeNghiThanhToan: ' + error.message,
    });
  }
};
