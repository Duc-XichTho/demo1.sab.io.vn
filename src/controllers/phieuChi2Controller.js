import * as phieuChi2Service from "../services/phieuChi2Service.js";

export const getAllPhieuChi2Controller = async (req, res) => {
  try {
    const data = await phieuChi2Service.getAllPhieuChi2Service();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export const createPhieuChi2Controller = async (req, res) => {
  try {
    const data = await phieuChi2Service.createPhieuChi2Service(req.body);
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export const updatePhieuChi2Controller = async (req, res) => {
  try {
    const data = await phieuChi2Service.updatePhieuChi2Service(req.params.id, req.body);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export const deletePhieuChi2Controller = async (req, res) => {
  try {
    const data = await phieuChi2Service.deletePhieuChi2Service(req.params.id);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}