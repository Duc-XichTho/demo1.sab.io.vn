import express from 'express';
import {
    getAllCanvasChatController,
    createCanvasChatController,
    updateCanvasChatController,
    deleteCanvasChatController
} from '../controllers/CanvasChatController.js';

const router = express.Router();

router.get('/', getAllCanvasChatController);

router.post('/', createCanvasChatController);

router.put('/', updateCanvasChatController);

router.delete('/:id', deleteCanvasChatController);

export default router;