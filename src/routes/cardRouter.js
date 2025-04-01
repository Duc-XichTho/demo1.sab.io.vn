import express from 'express';
import {
    getAllStepFromCardController,
    createCardController,
    deleteCardController,
    getAllCardController,
    getCardByIdController,
    updateCardController
} from "../controllers/cardController.js";

const router = express.Router();

router.get('/', getAllCardController);

router.get('/steps', getAllStepFromCardController);

router.post('/', createCardController);

router.put('/', updateCardController);

router.delete('/:id', deleteCardController);

router.get('/:id', getCardByIdController);

export default router;
