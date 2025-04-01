import express from 'express';
import {
    getAllSheetColumnBySheetIdController,
    getColumnDataByIdController,
    getColumnDataByCloneIdController,
    updateSheetColumnController,
    createSheetColumnController,
    deleteSheetColumnController
} from '../controllers/sheetColumnController.js';

const router = express.Router();

router.get('/:sheet_id', getAllSheetColumnBySheetIdController);

router.get('/column-data/:id', getColumnDataByIdController);

router.get('/column-data/clone-id/:id', getColumnDataByCloneIdController);

router.put('/', updateSheetColumnController);

router.post('/', createSheetColumnController);

router.delete('/:id', deleteSheetColumnController);

export default router;