import * as chiTietPhieuThuService from "../services/chiTietPhieuThuService.js";

export const getAllChiTietPhieuThuByPhieuThuIdController = async (req, res) => {
  try {
    const data = await chiTietPhieuThuService.getAllChiTietPhieuThuByPhieuThuIdService(req.params.id);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createChiTietPhieuThuController = async (req, res) => {
  try {
    const data = await chiTietPhieuThuService.createChiTietPhieuThuService(req.body);
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateChiTietPhieuThuController = async (req, res) => {
  try {
    const data = await chiTietPhieuThuService.updateChiTietPhieuThuService(req.params.id, req.body);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const hideChiTietPhieuThuController = async (req, res) => {
  try {
    const data = await chiTietPhieuThuService.hideChiTietPhieuThuService(req.params.id);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};