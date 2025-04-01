import express from 'express';
import {
    createPBLSXController, deletePBLSXController,
    getAllPBLSXController,
    getPBLSXByIdController, updatePBLSXController
} from "../controllers/pblsxController.js";

const router = express.Router();

router.post('/', createPBLSXController);

router.get('/', getAllPBLSXController);

router.put('/', updatePBLSXController);

router.delete('/:id', deletePBLSXController);

router.get('/:id', getPBLSXByIdController);

export default router;
