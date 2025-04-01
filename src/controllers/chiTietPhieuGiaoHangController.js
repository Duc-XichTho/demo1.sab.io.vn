import * as chiTietPhieuGiaoHangService from "../services/chiTietPhieuGiaoHangService.js";

export const getAllChiTietPhieuGiaoHangByPhieuGiaoIdController = async (req, res) => {
  try {
    const data = await chiTietPhieuGiaoHangService.getAllChiTietPhieuGiaoHangByPhieuGiaoIdService(req.params.id);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createChiTietPhieuGiaoHangController = async (req, res) => {
  try {
    const data = await chiTietPhieuGiaoHangService.createChiTietPhieuGiaoHangService(req.body);
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateChiTietPhieuGiaoHangController = async (req, res) => {
  try {
    const data = await chiTietPhieuGiaoHangService.updateChiTietPhieuGiaoHangService(req.params.id, req.body);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const hideChiTietPhieuGiaoHangController = async (req, res) => {
  try {
    const data = await chiTietPhieuGiaoHangService.hideChiTietPhieuGiaoHangService(req.params.id);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};