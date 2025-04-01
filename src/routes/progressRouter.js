import express from 'express';
import {
    getAllProgressController,
    createProgressController,
    updateProgressController,
    deleteProgressController
} from "../controllers/progressController.js";

const router = express.Router();

router.get('/', getAllProgressController);

router.post('/', createProgressController);

router.put('/', updateProgressController);

router.delete('/:id', deleteProgressController);

export default router;