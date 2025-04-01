import express from 'express';
import {
    createPBGV3Controller, deletePBGV3Controller,
    getAllPBGV3Controller,
    getPBGV3ByIdController, updatePBGV3Controller
} from "../controllers/pbgv3Controller.js";

const router = express.Router();

router.post('/', createPBGV3Controller);

router.get('/', getAllPBGV3Controller);

router.put('/', updatePBGV3Controller);

router.delete('/:id', deletePBGV3Controller);

router.get('/:id', getPBGV3ByIdController);

export default router;
