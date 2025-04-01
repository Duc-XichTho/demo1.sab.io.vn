import express from 'express';
import {
    createCrossCheckController, deleteCrossCheckController,
    getAllCrossCheckController,
    getCrossCheckByIdController, updateCrossCheckController
} from "../controllers/crossCheckController.js";

const router = express.Router();

router.post('/', createCrossCheckController);

router.get('/', getAllCrossCheckController);

router.put('/', updateCrossCheckController);

router.delete('/:id', deleteCrossCheckController);

router.get('/:id', getCrossCheckByIdController);

export default router;
