import * as detailPhieuChiService from "../services/detailPhieuChiService.js";

export const getAllDetailPhieuChiByPhieuChiIdController = async (req, res) => {
  try {
    const data = await detailPhieuChiService.getAllDetailPhieuChiByPhieuChiIdService(req.params.id);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createDetailPhieuChiController = async (req, res) => {
  try {
    const data = await detailPhieuChiService.createDetailPhieuChiService(req.body);
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateDetailPhieuChiController = async (req, res) => {
  try {
    const data = await detailPhieuChiService.updateDetailPhieuChiService(req.params.id, req.body);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const hideDetailPhieuChiController = async (req, res) => {
  try {
    const data = await detailPhieuChiService.hideDetailPhieuChiService(req.params.id);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};