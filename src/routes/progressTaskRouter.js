import express from 'express';
import {
    getAllProgressTaskController,
    createProgressTaskController,
    updateProgressTaskController,
    deleteProgressTaskController
} from '../controllers/progressTaskController.js';

const router = express.Router();

router.get('/:stepId', getAllProgressTaskController);

router.post('/', createProgressTaskController);

router.put('/:id', updateProgressTaskController);

router.delete('/:id', deleteProgressTaskController);

export default router;