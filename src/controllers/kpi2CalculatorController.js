import {
    createKpi2CalculatorService,
    getAllKpi2CalculatorService,
    getKpi2CalculatorByIdService,
    updateKpi2CalculatorService,
    deleteKpi2CalculatorService,
} from "../services/kpi2CalculatorService.js";

export const createKpi2Calculator = async (req, res) => {
    try {
        const data = await createKpi2CalculatorService(req.body);
        res.status(201).json(data);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const getKpi2CalculatorById = async (req, res) => {
    try {
        const data = await getKpi2CalculatorByIdService(req.params.id);
        res.status(200).json(data);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const getAllKpi2Calculator = async (req, res) => {
    try {
        const dataList = await getAllKpi2CalculatorService();
        res.status(200).json(dataList);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const updateKpi2Calculator = async (req, res) => {
    try {
        const data = await updateKpi2CalculatorService(req.body);
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const deleteKpi2Calculator = async (req, res) => {
    try {
        const result = await deleteKpi2CalculatorService(req.params.id);
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}; 