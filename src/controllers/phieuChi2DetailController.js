import * as phieuChi2DetailService from "../services/phieuChi2DetailService.js";
import {getAllTamUngDetailByTamUngIdService} from "../services/tamUngDetailService.js";


export const getAllPhieuChi2DetailByPhieuChi2IdController = async (req, res) => {
  try {
    const data = await phieuChi2DetailService.getAllPhieuChi2DetailByPhieuChi2IdService(req.params.id);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({
      message: 'Lỗi khi lấy danh sách bản ghi TamUngDetail: ' + error.message,
    });
  }
};
export const createPhieuChi2DetailController = async (req, res) => {
  try {
    const data = await phieuChi2DetailService.createPhieuChi2DetailService(req.body);
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export const updatePhieuChi2DetailController = async (req, res) => {
  try {
    const data = await phieuChi2DetailService.updatePhieuChi2DetailService(req.params.id, req.body);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export const deletePhieuChi2DetailController = async (req, res) => {
  try {
    const data = await phieuChi2DetailService.deletePhieuChi2DetailService(req.params.id);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}