import express from 'express';
import {
    createHoaDonSanPhamController,
    getAllHoaDonSanPhamByHoaDonIdController
} from "../controllers/hoaDonSanPhamController.js";

const router = express.Router();

router.get('/:id', getAllHoaDonSanPhamByHoaDonIdController);

router.post('/', createHoaDonSanPhamController);

export default router;