import express from 'express';
import {
    createReportCanvasController, deleteReportCanvasController,
    getAllReportCanvasController,
    getReportCanvasByIdController, updateReportCanvasController
} from "../controllers/reportCanvasController.js";

const router = express.Router();

router.post('/', createReportCanvasController);

router.get('/', getAllReportCanvasController);

router.put('/', updateReportCanvasController);

router.delete('/:id', deleteReportCanvasController);

router.get('/:id', getReportCanvasByIdController);

export default router;
