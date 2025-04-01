import express from 'express';
import {
    createHangHoaLoKhoController, deleteHangHoaLoKhoController,
    getAllHangHoaLoKhoController,
    getHangHoaLoKhoByIdController, updateHangHoaLoKhoController
} from "../controllers/hangHoaLoKhoController.js";

const router = express.Router();

router.post('/', createHangHoaLoKhoController);

router.get('/', getAllHangHoaLoKhoController);

router.put('/', updateHangHoaLoKhoController);

router.delete('/:id', deleteHangHoaLoKhoController);

router.get('/:id', getHangHoaLoKhoByIdController);

export default router;
