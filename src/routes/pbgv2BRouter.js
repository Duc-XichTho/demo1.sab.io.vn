import express from 'express';
import {
    createPBGV2BController, deletePBGV2BController,
    getAllPBGV2BController,
    getPBGV2BByIdController, updatePBGV2BController
} from "../controllers/pbgv2BController.js";

const router = express.Router();

router.post('/', createPBGV2BController);

router.get('/', getAllPBGV2BController);

router.put('/', updatePBGV2BController);

router.delete('/:id', deletePBGV2BController);

router.get('/:id', getPBGV2BByIdController);

export default router;
