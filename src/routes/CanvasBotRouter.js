import express from 'express';
import {
    getAllCanvasBotController,
    createCanvasBotController,
    updateCanvasBotController,
    deleteCanvasBotController,
    getCanvasBotByIdCanvasContainerController
} from '../controllers/CanvasBotController.js';

const router = express.Router();

router.get('/', getAllCanvasBotController);

router.get('/canvas-container/:id', getCanvasBotByIdCanvasContainerController);

router.post('/', createCanvasBotController);

router.put('/', updateCanvasBotController);

router.delete('/:id', deleteCanvasBotController);

export default router;