import express from 'express';
import {
    checkDuyetPMVPlanController,
    createPMVPlanController, deletePMVPlanController,
    getAllPMVPlanController,
    getPMVPlanByIdController, updatePMVPlanController
} from "../controllers/pmvPlanController.js";

const router = express.Router();

router.post('/', createPMVPlanController);

router.get('/', getAllPMVPlanController);
router.get('/check-duyet', checkDuyetPMVPlanController);

router.put('/', updatePMVPlanController);

router.delete('/:id', deletePMVPlanController);

router.get('/:id', getPMVPlanByIdController);

export default router;
