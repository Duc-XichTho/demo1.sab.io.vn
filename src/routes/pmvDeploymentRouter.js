import express from 'express';
import {
    createPMVDeploymentController,
    deletePMVDeploymentController, generateDatesByPeriodController,
    getAllPMVDeploymentController,
    getPMVDeploymentByIdController, getPMVDeploymentByPlanIdController,
    updatePMVDeploymentController
} from "../controllers/pmvDeploymentController.js";

const router = express.Router();

router.post('/', createPMVDeploymentController);

router.get('/', getAllPMVDeploymentController);

router.put('/', updatePMVDeploymentController);

router.delete('/:id', deletePMVDeploymentController);

router.post('/tinh', generateDatesByPeriodController);
router.get('/:id', getPMVDeploymentByIdController);
router.get('/plan/:id', getPMVDeploymentByPlanIdController);

export default router;
