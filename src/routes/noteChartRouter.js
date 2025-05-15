import express from "express";
import {
    createNoteChartController,
    deleteNoteChartController, getALLNoteChartController, getNoteChartByIdController,
    getOrCreateNoteChartController,
    updateNoteChartController
} from "../controllers/noteChartController.js";

const router = express.Router();

router.get('/chartTitle/:title', getOrCreateNoteChartController);
router.get('/:id', getNoteChartByIdController);

router.get('/', getALLNoteChartController);
router.post("/", createNoteChartController)

router.put("/:id", updateNoteChartController);

router.delete("/:id", deleteNoteChartController)

export default router;