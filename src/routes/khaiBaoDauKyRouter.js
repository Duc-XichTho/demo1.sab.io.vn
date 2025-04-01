import express from 'express';
import {
    createKhaiBaoDauKyController, deleteKhaiBaoDauKyController,
    getAllKhaiBaoDauKyController,
    getKhaiBaoDauKyByIdController, updateKhaiBaoDauKyController
} from "../controllers/khaiBaoDauKyController.js";

const router = express.Router();

router.post('/', createKhaiBaoDauKyController);

router.get('/', getAllKhaiBaoDauKyController);

router.put('/', updateKhaiBaoDauKyController);

router.delete('/:id', deleteKhaiBaoDauKyController);

router.get('/:id', getKhaiBaoDauKyByIdController);

export default router;
