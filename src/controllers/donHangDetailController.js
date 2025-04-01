import * as donHangDetailService from "../services/donHangDetailService.js";

export const getAllDonHangDetailByDonHangIdController = async (req, res) => {
  try {
    const data = await donHangDetailService.getAllDonHangDetailByDonHangIdService(req.params.id);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createDonHangDetailController = async (req, res) => {
  try {
    const data = await donHangDetailService.createDonHangDetailService(req.body);
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateDonHangDetailController = async (req, res) => {
  try {
    const data = await donHangDetailService.updateDonHangDetailService(req.params.id, req.body);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const hideDonHangDetailController = async (req, res) => {
  try {
    const data = await donHangDetailService.hideDonHangDetailService(req.params.id);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};