import {
  createKpiCalculatorService,
  getAllKpiCalculatorService,
  getKpiCalculatorByIdService,
  updateKpiCalculatorService,
  deleteKpiCalculatorService,
} from "../services/kpiCalculatorService.js";

export const createKpiCalculator = async (req, res) => {
  try {
    const data = await createKpiCalculatorService(req.body);
    res.status(201).json(data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getKpiCalculatorById = async (req, res) => {
  try {
    const data = await getKpiCalculatorByIdService(req.params.id);
    res.status(200).json(data);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getAllKpiCalculator = async (req, res) => {
  try {
    const dataList = await getAllKpiCalculatorService();
    res.status(200).json(dataList);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateKpiCalculator = async (req, res) => {
  try {
    const data = await updateKpiCalculatorService(req.body);
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteKpiCalculator = async (req, res) => {
  try {
    const result = await deleteKpiCalculatorService(req.params.id);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
