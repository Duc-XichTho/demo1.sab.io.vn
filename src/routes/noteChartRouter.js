import express from "express";
import {
    createNoteChartController,
    deleteNoteChartController,
    getOrCreateNoteChartController,
    updateNoteChartController
} from "../controllers/noteChartController.js";

const router = express.Router();

router.get('/:title', getOrCreateNoteChartController);

router.post("/", createNoteChartController)

router.put("/:id", updateNoteChartController);

router.delete("/:id", deleteNoteChartController)

export default router;