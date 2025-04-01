import express from 'express';
import {
    createCauHinhController, deleteCauHinhController,
    getAllCauHinhController,
    getCauHinhByIdController, updateCauHinhController
} from "../controllers/cauHinhController.js";

const router = express.Router();

router.post('/', createCauHinhController);

router.get('/', getAllCauHinhController);

router.put('/', updateCauHinhController);

router.delete('/:id', deleteCauHinhController);

router.get('/:id', getCauHinhByIdController);

export default router;
