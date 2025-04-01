import express from 'express';
import {
    createResultCrossCheckController, deleteResultCrossCheckController,
    getAllResultCrossCheckController,
    getResultCrossCheckByIdController, updateResultCrossCheckController
} from "../controllers/resultCrossCheckController.js";

const router = express.Router();

router.post('/', createResultCrossCheckController);

router.get('/', getAllResultCrossCheckController);

router.put('/', updateResultCrossCheckController);

router.delete('/:id', deleteResultCrossCheckController);

router.get('/:id', getResultCrossCheckByIdController);

export default router;
