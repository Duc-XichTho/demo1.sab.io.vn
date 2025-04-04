import express from 'express';
import {
    createHoaDonSanPhamController,
    getAllHoaDonSanPhamByHoaDonIdController, updateHoaDonSanPhamController
} from "../controllers/hoaDonSanPhamController.js";

const router = express.Router();

router.get('/:id', getAllHoaDonSanPhamByHoaDonIdController);

router.post('/', createHoaDonSanPhamController);
router.put('/', updateHoaDonSanPhamController);

export default router;