import express from 'express';
import {
    createCCPBController, deleteCCPBController,
    getAllCCPBController,
    getCCPBByIdController, updateCCPBController
} from "../controllers/ccpbController.js";

const router = express.Router();

router.post('/', createCCPBController);

router.get('/', getAllCCPBController);

router.put('/', updateCCPBController);

router.delete('/:id', deleteCCPBController);

router.get('/:id', getCCPBByIdController);

export default router;
