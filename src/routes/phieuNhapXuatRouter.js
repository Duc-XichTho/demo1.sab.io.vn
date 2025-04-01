import express from 'express';
import * as phieuNhapXuatController from '../controllers/phieuNhapXuatController.js';
const router = express.Router();

router.get('/phieu-xuat', phieuNhapXuatController.getAllPhieuXuatController);

router.get('/phieu-nhap', phieuNhapXuatController.getAllPhieuNhapController);

export default router;