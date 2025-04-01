import express from 'express';
import {
  createKhoanMucDoanhThuChiPhiController,
  getAllKhoanMucDoanhThuChiPhiController,
  updateKhoanMucDoanhThuChiPhiController,
  deleteKhoanMucDoanhThuChiPhiController,
} from '../controllers/khoanMucDoanhThuChiPhiController.js';

const router = express.Router();

router.post('/', createKhoanMucDoanhThuChiPhiController);

router.get('/', getAllKhoanMucDoanhThuChiPhiController);

router.put('/', updateKhoanMucDoanhThuChiPhiController);

router.delete('/:id', deleteKhoanMucDoanhThuChiPhiController);

export default router;
