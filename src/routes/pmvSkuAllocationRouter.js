import express from 'express';
import {
    createPMVSkuAllocationController, deletePMVSkuAllocationController,
    getAllPMVSkuAllocationController, getAllDetailIDController,
    getPMVSkuAllocationByIdController, updatePMVSkuAllocationController, getAllPMVSkuAllocationByDeployDetailIdController
} from "../controllers/PMVSkuAllocationController.js";

const router = express.Router();

router.post('/', createPMVSkuAllocationController);

router.get('/', getAllPMVSkuAllocationController);

router.get('/detail-id', getAllDetailIDController);

router.put('/', updatePMVSkuAllocationController);

router.delete('/:id', deletePMVSkuAllocationController);

router.get('/:id', getPMVSkuAllocationByIdController);

router.get('/deploy-detail/:deployDetailId', getAllPMVSkuAllocationByDeployDetailIdController);

export default router;
