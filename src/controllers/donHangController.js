import * as donHangService from '../services/donHangService.js'
import {getDonHangByCode2Service} from "../services/donHangService.js";

export const getDonHangByIdController = async (req, res) => {
  try {
    const donHang = await donHangService.getDonHangByIdService(req.params.id);
    res.status(200).json(donHang);
  } catch (error) {
    res.status(500).json({
      message: 'Lỗi khi lấy bản ghi DonHangById: ' + error.message,
    });
  }
}

export const getDonHangByCodeController = async (req, res) => {
  try {
    const donHang = await donHangService.getDonHangByCodeService(req.params.code);
    res.status(200).json(donHang);
  } catch (error) {
    res.status(500).json({
      message: 'Lỗi khi lấy bản ghi DonHangByCode: ' + error.message,
    });
  }
}
export const getDonHangByCode2Controller = async (req, res) => {
  try {
    const donHang = await donHangService.getDonHangByCode2Service(req.params.code);
    res.status(200).json(donHang);
  } catch (error) {
    res.status(500).json({
      message: 'Lỗi khi lấy bản ghi DonHangByCode: ' + error.message,
    });
  }
}

export const getAllDonHangController = async (req, res) => {
  try {
    const donHangList = await donHangService.getAllDonHangService();
    res.status(200).json(donHangList);
  } catch (error) {
    res.status(500).json({
      message: 'Lỗi khi lấy danh sách bản ghi DonHang: ' + error.message,
    });
  }
};

export const createDonHangController = async (req, res) => {
  try {
    const donHang = await donHangService.createDonHangService(req.body);
    res.status(201).json(donHang);
  } catch (error) {
    res.status(500).json({
      message: 'Lỗi khi tạo bản ghi DonHang: ' + error.message,
    });
  }
};

export const updateDonHangController = async (req, res) => {
  try {
    const donHang = await donHangService.updateDonHangService(req.params.id, req.body);
    res.status(200).json(donHang);
  } catch (error) {
    res.status(500).json({
      message: 'Lỗi khi cập nhật bản ghi DonHang: ' + error.message,
    });
  }
};

export const hideDonHangController = async (req, res) => {
  try {
    const donHang = await donHangService.hideDonHangService(req.params.id);
    res.status(200).json(donHang);
  } catch (error) {
    res.status(500).json({
      message: 'Lỗi khi ẩn bản ghi DonHang: ' + error.message,
    });
  }
};
