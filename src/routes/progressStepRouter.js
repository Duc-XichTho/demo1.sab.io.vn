import express from 'express';
import {
    getAllProgressStepController,
    createProgressStepController,
    updateProgressStepController,
    deleteProgressStepController
} from '../controllers/progressStepServiceController.js';

const router = express.Router();

router.get('/:progressId', getAllProgressStepController);

router.post('/', createProgressStepController);

router.put('/:id', updateProgressStepController);

router.delete('/:id', deleteProgressStepController);

export default router;