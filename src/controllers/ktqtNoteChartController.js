
import {
    createKTQTNoteChart,
    deleteKTQTNoteChart,
    getOrCreateKTQTNoteChart,
    updateKTQTNoteChart,
} from "../services/ktqtNoteChartService.js";

// GET
export const getOrCreateKTQTNoteChartController = async (req, res) => {
    try {
        const title = req.params.title;
        const data = await getOrCreateKTQTNoteChart(title)
        res.status(200).json(data);
    } catch (e) {
        res
            .status(404)
            .json({ message: "Bản ghi chart data không tồn tại: " + e.message });
    }
}

// CREATE
export const createKTQTNoteChartController = async (req, res) => {
    try {
        const { table } = req.params
        const { metadata } = req.body;
        const data = await createKTQTNoteChart(table, metadata);
        res.status(200).json(data)
    } catch (e) {
        res
            .status(404)
            .json({ message: "Bản ghi chart data không tồn tại: " + e.message });
    }
}

// UPDATE
export const updateKTQTNoteChartController = async (req, res) => {
    try {
        const data = req.body;
        const id = req.params;
        const result = await updateKTQTNoteChart(id , data);
        res.status(200).json(result);
    } catch (e) {
        res
            .status(404)
            .json({ message: "Bản ghi chart data không tồn tại: " + e.message });
    }
}

// DELETE
export const deleteKTQTNoteChartController = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await deleteKTQTNoteChart(id);
        res.status(200).json(result);
    } catch (e) {
        res
            .status(404)
            .json({ message: "Bản ghi chart data không tồn tại: " + e.message });
    }
}