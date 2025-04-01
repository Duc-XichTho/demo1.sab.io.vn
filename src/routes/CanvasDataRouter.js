import express from 'express';
import {
    getAllCanvasDataController,
    createCanvasDataController,
    updateCanvasDataController,
    deleteCanvasDataController
} from '../controllers/CanvasDataController.js';

const router = express.Router();

router.get('/', getAllCanvasDataController);

router.post('/', createCanvasDataController);

router.put('/', updateCanvasDataController);

router.delete('/:id', deleteCanvasDataController);

export default router;