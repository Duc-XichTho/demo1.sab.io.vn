import * as donMuaHangService from '../services/donMuaHangService.js'
import {getDonMuaHangByCode2Service} from "../services/donMuaHangService.js";

export const getDonMuaHangByCodeController = async (req, res) => {
  try {
    const donMuaHang = await donMuaHangService.getDonMuaHangByCodeService(req.params.code);
    res.status(200).json(donMuaHang);
  } catch (error) {
    return {
      message: 'Lỗi khi lấy bản ghi DonMuaHang: ' + error.message,
    };

  }
}
export const getDonMuaHangByCode2Controller = async (req, res) => {
  try {
    const donMuaHang = await donMuaHangService.getDonMuaHangByCode2Service(req.params.code);
    res.status(200).json(donMuaHang);
  } catch (error) {
    return {
      message: 'Lỗi khi lấy bản ghi DonMuaHang: ' + error.message,
    };

  }
}

export const getAllDonMuaHangController = async (req, res) => {
  try {
    const donMuaHangList = await donMuaHangService.getAllDonMuaHangService();
    res.status(200).json(donMuaHangList);
  } catch (error) {
    res.status(500).json({
      message: 'Lỗi khi lấy danh sách bản ghi DonMuaHang: ' + error.message,
    });
  }
};

export const createDonMuaHangController = async (req, res) => {
  try {
    const donMuaHang = await donMuaHangService.createDonMuaHangService(req.body);
    res.status(201).json(donMuaHang);
  } catch (error) {
    res.status(500).json({
      message: 'Lỗi khi tạo bản ghi DonMuaHang: ' + error.message,
    });
  }
};

export const updateDonMuaHangController = async (req, res) => {
  try {
    const donMuaHang = await donMuaHangService.updateDonMuaHangService(req.params.id, req.body);
    res.status(200).json(donMuaHang);
  } catch (error) {
    res.status(500).json({
      message: 'Lỗi khi cập nhật bản ghi DonMuaHang: ' + error.message,
    });
  }
};

export const hideDonMuaHangController = async (req, res) => {
  try {
    const donMuaHang = await donMuaHangService.hideDonMuaHangService(req.params.id);
    res.status(200).json(donMuaHang);
  } catch (error) {
    res.status(500).json({
      message: 'Lỗi khi ẩn bản ghi DonMuaHang: ' + error.message,
    });
  }
};