import express from 'express';
import {
    createLoController, deleteLoController,
    getAllLoController,
    getLoByIdController, updateLoController
} from "../controllers/loController.js";

const router = express.Router();

router.post('/', createLoController);

router.get('/', getAllLoController);

router.put('/', updateLoController);

router.delete('/:id', deleteLoController);

router.get('/:id', getLoByIdController);

export default router;
