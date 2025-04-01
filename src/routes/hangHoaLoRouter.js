import express from 'express';
import {
    createHangHoaLoController, deleteHangHoaLoController,
    getAllHangHoaLoController,
    getHangHoaLoByIdController, updateHangHoaLoController
} from "../controllers/hangHoaLoController.js";

const router = express.Router();

router.post('/', createHangHoaLoController);

router.get('/', getAllHangHoaLoController);

router.put('/', updateHangHoaLoController);

router.delete('/:id', deleteHangHoaLoController);

router.get('/:id', getHangHoaLoByIdController);

export default router;
