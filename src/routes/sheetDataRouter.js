import express from 'express';
import {
    getAllSheetDataBySheetIdController,
    updateSheetDataController,
    createSheetDataController,
    deleteSheetDataController
} from '../controllers/sheetDataController.js';

const router = express.Router();

router.get('/:sheet_id', getAllSheetDataBySheetIdController);

router.put('/', updateSheetDataController);

router.post('/', createSheetDataController);

router.delete('/:id', deleteSheetDataController);

export default router;