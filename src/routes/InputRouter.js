import express from 'express';
import {
    createInputController, deleteInputController,
    getAllInputController,
    getInputByIdController, getLastIdInputController, getLastUpdateInputController, updateInputController
} from "../controllers/inputController.js";

const router = express.Router();

router.post('/', createInputController);
router.get('/', getAllInputController);
router.put('/', updateInputController);
router.delete('/:id', deleteInputController);

router.get('/last-update', getLastUpdateInputController);
router.get('/last-id', getLastIdInputController);

router.get('/:id', getInputByIdController);

export default router;
