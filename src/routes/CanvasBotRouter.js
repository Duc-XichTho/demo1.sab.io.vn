import express from 'express';
import {
    getAllCanvasBotController,
    createCanvasBotController,
    updateCanvasBotController,
    deleteCanvasBotController, getAllCanvasBotByCanvasContainerController
} from '../controllers/CanvasBotController.js';

const router = express.Router();

router.get('/', getAllCanvasBotController);
router.get('/CanvasContainer/:id', getAllCanvasBotByCanvasContainerController);

router.post('/', createCanvasBotController);

router.put('/', updateCanvasBotController);

router.delete('/:id', deleteCanvasBotController);

export default router;