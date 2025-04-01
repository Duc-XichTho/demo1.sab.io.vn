import * as CFConfigService from "../services/CFConfig.service.js";

export const getAllCFConfigController = async (req, res) => {
  try {
    const data = await CFConfigService.getAllCFConfigService();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getCFConfigByIdController = async (req, res) => {
  try {
    const data = await CFConfigService.getCFConfigByIdService(req.params.id);
    if (data) {
      res.json(data);
    } else {
      res.status(404).json({ error: "Not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export const getCFConfigByPlanIdController = async (req, res) => {
  try {
    const data = await CFConfigService.getCFConfigByPlanIdService(req.params.planId);
    if (data) {
      res.json(data);
    } else {
      res.status(404).json({ error: "Not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export const createCFConfigController = async (req, res) => {
  try {
    const data = await CFConfigService.createCFConfigService(req.body);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export const updateCFConfigController = async (req, res) => {
  try {
    const data = await CFConfigService.updateCFConfigService(req.params.id, req.body);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export const deleteCFConfigController = async (req, res) => {
  try {
    const data = await CFConfigService.deleteCFConfigService(req.params.id);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}