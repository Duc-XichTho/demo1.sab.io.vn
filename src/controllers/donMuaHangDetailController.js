import * as donMuaHangDetailService from "../services/donMuaHangDetailService.js";

export const getAllDonMuaHangDetailByDonMuaHangIdController = async (req, res) => {
  try {
    const data = await donMuaHangDetailService.getAllDonMuaHangDetailByDonMuaHangIdService(req.params.id);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createDonMuaHangDetailController = async (req, res) => {
  try {
    const data = await donMuaHangDetailService.createDonMuaHangDetailService(req.body);
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateDonMuaHangDetailController = async (req, res) => {
  try {
    const data = await donMuaHangDetailService.updateDonMuaHangDetailService(req.params.id, req.body);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const hideDonMuaHangDetailController = async (req, res) => {
  try {
    const data = await donMuaHangDetailService.hideDonMuaHangDetailService(req.params.id);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};