import express from 'express';
import {
    createPMVDeploymentDetailController, deletePMVDeploymentDetailController,
    getAllPMVDeploymentDetailController, getPMVDeploymentDetailByDeploymentIdController,
    getPMVDeploymentDetailByIdController, updatePMVDeploymentDetailController
} from "../controllers/pmvDeploymentDetailController.js";

const router = express.Router();

router.post('/', createPMVDeploymentDetailController);

router.get('/', getAllPMVDeploymentDetailController);

router.put('/', updatePMVDeploymentDetailController);

router.delete('/:id', deletePMVDeploymentDetailController);

router.get('/:id', getPMVDeploymentDetailByIdController);

router.get('/deployment/:deploymentId', getPMVDeploymentDetailByDeploymentIdController);

export default router;
