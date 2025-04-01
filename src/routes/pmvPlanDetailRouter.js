import express from 'express';
import {
    createPMVPlanDetailController, deletePMVPlanDetailController,
    getAllPMVPlanDetailController,
    getPMVPlanDetailByIdController, updatePMVPlanDetailController
} from "../controllers/pmvPlanDetailController.js";

const router = express.Router();

router.post('/', createPMVPlanDetailController);

router.get('/', getAllPMVPlanDetailController);

router.put('/', updatePMVPlanDetailController);

router.delete('/:id', deletePMVPlanDetailController);

router.get('/:id', getPMVPlanDetailByIdController);

export default router;
