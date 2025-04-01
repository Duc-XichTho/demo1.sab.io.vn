import express from 'express';
import {
    getAllStepByCardIdController,
    getAllStepByTemplateIdController,
    createStepController,
    getAllStepController,
    getStepByIdController,
    updateStepController,
    deleteStepController
} from "../controllers/stepController.js";

const router = express.Router();

router.get('/', getAllStepController);

router.get('/card/:id', getAllStepByCardIdController);

router.get('/template/:id', getAllStepByTemplateIdController);

router.post('/', createStepController);

router.put('/', updateStepController);

router.delete('/:id', deleteStepController);

router.get('/:id', getStepByIdController);

export default router;
