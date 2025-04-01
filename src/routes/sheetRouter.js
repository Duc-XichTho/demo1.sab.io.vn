import express from 'express';
import {
    getAllSheetController,
    getSheetByIdController,
    updateSheetController,
    createSheetController,
    deleteSheetController
} from '../controllers/sheetController.js';

const router = express.Router();

router.get('/', getAllSheetController);

router.get('/:id', getSheetByIdController);

router.put('/', updateSheetController);

router.post('/', createSheetController);

router.delete('/:id', deleteSheetController);

export default router;