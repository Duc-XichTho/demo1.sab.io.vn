import express from 'express';
import {
    createPMVChuKyController, deletePMVChuKyController,
    getAllPMVChuKyController,
    getPMVChuKyByIdController, updatePMVChuKyController
} from "../controllers/pmvChuKyController.js";

const router = express.Router();

router.post('/', createPMVChuKyController);

router.get('/', getAllPMVChuKyController);

router.put('/', updatePMVChuKyController);

router.delete('/:id', deletePMVChuKyController);

router.get('/:id', getPMVChuKyByIdController);

export default router;
