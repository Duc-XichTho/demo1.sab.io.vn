import express from 'express';
import {
    createSubStepController, deleteSubStepController,
    getAllSubStepController,
    getSubStepByIdController, updateSubStepController
} from "../controllers/subStepController.js";

const router = express.Router();

router.post('/', createSubStepController);

router.get('/', getAllSubStepController);

router.put('/', updateSubStepController);

router.delete('/:id', deleteSubStepController);

router.get('/:id', getSubStepByIdController);

export default router;
