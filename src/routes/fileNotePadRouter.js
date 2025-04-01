import express from 'express';
import {
    createFileNotePadController,
    getFileNotePadController,
    updateFileNotePadController,
    deleteFileNotePadController, getFileNotePadByIdController,
} from '../controllers/fileNotePadController.js';

const router = express.Router();

router.post('/', createFileNotePadController);

router.get('/', getFileNotePadController);
router.get('/:id', getFileNotePadByIdController);

router.put('/', updateFileNotePadController);

router.delete('/:id', deleteFileNotePadController);

export default router;
