import express from 'express';
import {
  createKhoanMucThuChiTienController,
  getAllKhoanMucThuChiTienController,
  updateKhoanMucThuChiTienController,
  deleteKhoanMucThuChiTienController,
} from '../controllers/khoanMucThuChiTienController.js';

const router = express.Router();

router.post('/', createKhoanMucThuChiTienController);

router.get('/', getAllKhoanMucThuChiTienController);

router.put('/', updateKhoanMucThuChiTienController);

router.delete('/:id', deleteKhoanMucThuChiTienController);

export default router;
