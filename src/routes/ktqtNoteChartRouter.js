import express from "express";
import {
    createKTQTNoteChartController,
    deleteKTQTNoteChartController,
    getOrCreateKTQTNoteChartController,
    updateKTQTNoteChartController
} from "../controllers/ktqtNoteChartController.js";

const router = express.Router();

router.get('/:title', getOrCreateKTQTNoteChartController);

router.post("/", createKTQTNoteChartController)

router.put("/:id", updateKTQTNoteChartController);

router.delete("/:id", deleteKTQTNoteChartController)

export default router;