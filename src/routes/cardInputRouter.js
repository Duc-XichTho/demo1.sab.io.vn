import express from 'express';
import {
    createCardInputController, deleteCardInputController,
    getAllCardInputController,
    getCardInputByIdController, updateCardInputController
} from "../controllers/cardInputController.js";

const router = express.Router();

router.post('/', createCardInputController);

router.get('/', getAllCardInputController);

router.put('/', updateCardInputController);

router.delete('/:id', deleteCardInputController);

router.get('/:id', getCardInputByIdController);

export default router;
