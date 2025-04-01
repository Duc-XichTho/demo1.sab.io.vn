import express from 'express';
import {
    getAllChainTemplateStepSubStepController,
    createChainController, deleteChainController,
    getAllChainController,
    getChainByIdController, updateChainController
} from "../controllers/chainController.js";

const router = express.Router();

router.get('/ctss', getAllChainTemplateStepSubStepController);

router.post('/', createChainController);

router.get('/', getAllChainController);

router.put('/', updateChainController);

router.delete('/:id', deleteChainController);

router.get('/:id', getChainByIdController);

export default router;
