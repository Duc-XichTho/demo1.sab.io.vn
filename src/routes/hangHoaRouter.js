import express from 'express';
import {
    getAllInfoInventoryController,
    createHangHoaController,
    deleteHangHoaController,
    getAllHangHoaController,
    getHangHoaByIdController,
    updateHangHoaController
} from "../controllers/hangHoaController.js";

const router = express.Router();

router.get('/info-inventory', getAllInfoInventoryController);

router.post('/', createHangHoaController);

router.get('/', getAllHangHoaController);

router.put('/', updateHangHoaController);

router.delete('/:id', deleteHangHoaController);

router.get('/:id', getHangHoaByIdController);

export default router;
