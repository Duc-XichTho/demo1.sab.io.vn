import * as phieuGiaoHangService from '../services/phieuGiaoHangService.js'
import {getPhieuGiaoHangByCardIdService} from "../services/phieuGiaoHangService.js";

export const getAllPhieuGiaoHangController = async (req, res) => {
  try {
    const phieuGiaoHangList = await phieuGiaoHangService.getAllPhieuGiaoHangService();
    res.status(200).json(phieuGiaoHangList);
  } catch (error) {
    res.status(500).json({
      message: 'Lỗi khi lấy danh sách bản ghi PhieuGiaoHang: ' + error.message,
    });
  }
};

export const createPhieuGiaoHangController = async (req, res) => {
  try {
    const phieuGiaoHang = await phieuGiaoHangService.createPhieuGiaoHangService(req.body);
    res.status(201).json(phieuGiaoHang);
  } catch (error) {
    res.status(500).json({
      message: 'Lỗi khi tạo bản ghi PhieuGiaoHang: ' + error.message,
    });
  }
};

export const updatePhieuGiaoHangController = async (req, res) => {
  try {
    const phieuGiaoHang = await phieuGiaoHangService.updatePhieuGiaoHangService(req.params.id, req.body);
    res.status(200).json(phieuGiaoHang);
  } catch (error) {
    res.status(500).json({
      message: 'Lỗi khi cập nhật bản ghi PhieuGiaoHang: ' + error.message,
    });
  }
};

export const hidePhieuGiaoHangController = async (req, res) => {
  try {
    const phieuGiaoHang = await phieuGiaoHangService.hidePhieuGiaoHangService(req.params.id);
    res.status(200).json(phieuGiaoHang);
  } catch (error) {
    res.status(500).json({
      message: 'Lỗi khi ẩn bản ghi PhieuGiaoHang: ' + error.message,
    });
  }
};

export const getPhieuGiaoHangByCardIdServiceController = async (req, res) => {
  const { cardId } = req.params;
  try {
    const phieuGiaoHang = await phieuGiaoHangService.getPhieuGiaoHangByCardIdService(cardId);
    res.status(200).json(phieuGiaoHang);
  } catch (error) {
    res.status(500).json({
      message: 'Lỗi khi ẩn bản ghi PhieuGiaoHang: ' + error.message,
    });
  }
};