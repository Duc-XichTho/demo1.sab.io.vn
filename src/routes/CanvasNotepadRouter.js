import express from 'express';
import {
    getAllCanvasNotepadController,
    getCanvasNotepadByIdController,
    createCanvasNotepadController,
    updateCanvasNotepadController,
    deleteCanvasNotepadController
} from "../controllers/CanvasNotepadController.js";

const router = express.Router();

router.get('/', getAllCanvasNotepadController);

router.get('/:id', getCanvasNotepadByIdController);

router.post('/', createCanvasNotepadController);

router.put('/', updateCanvasNotepadController);

router.delete('/:id', deleteCanvasNotepadController);

export default router;