import express from 'express';
import {
    getAllProgressTaskPostController,
    createProgressTaskPostController,
    deleteProgressTaskPostController,
    updateProgressTaskPostController
} from '../controllers/progressTaskPostController.js';

const router = express.Router();

router.get('/:progressTaskId', getAllProgressTaskPostController);

router.post('/', createProgressTaskPostController);

router.put('/', updateProgressTaskPostController);

router.delete('/:id', deleteProgressTaskPostController);

export default router;