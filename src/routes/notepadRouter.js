import express from 'express';
import {
    getAllNotepadController,
    getNotePadByIdController,
    updateNotepadController,
    createNotepadController,
    deleteNotepadController
} from '../controllers/notepadController.js';

const router = express.Router();

router.get('/', getAllNotepadController);

router.get('/:id', getNotePadByIdController);

router.put('/', updateNotepadController);

router.post('/', createNotepadController);

router.delete('/:id', deleteNotepadController);

export default router;