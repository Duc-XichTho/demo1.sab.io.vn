
import {
    createNoteChart,
    deleteNoteChart,
    getOrCreateNoteChart,
    updateNoteChart,
} from "../services/noteChartService.js";

// GET
export const getOrCreateNoteChartController = async (req, res) => {
    try {
        const title = req.params.title;
        const data = await getOrCreateNoteChart(title)
        res.status(200).json(data);
    } catch (e) {
        res
            .status(404)
            .json({ message: "Bản ghi chart data không tồn tại: " + e.message });
    }
}

// CREATE
export const createNoteChartController = async (req, res) => {
    try {
        const { table } = req.params
        const { metadata } = req.body;
        const data = await createNoteChart(table, metadata);
        res.status(200).json(data)
    } catch (e) {
        res
            .status(404)
            .json({ message: "Bản ghi chart data không tồn tại: " + e.message });
    }
}

// UPDATE
export const updateNoteChartController = async (req, res) => {
    try {
        const data = req.body;
        const id = req.params;
        const result = await updateNoteChart(id , data);
        res.status(200).json(result);
    } catch (e) {
        res
            .status(404)
            .json({ message: "Bản ghi chart data không tồn tại: " + e.message });
    }
}

// DELETE
export const deleteNoteChartController = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await deleteNoteChart(id);
        res.status(200).json(result);
    } catch (e) {
        res
            .status(404)
            .json({ message: "Bản ghi chart data không tồn tại: " + e.message });
    }
}