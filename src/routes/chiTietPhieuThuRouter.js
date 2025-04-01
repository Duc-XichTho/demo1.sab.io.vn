import express from 'express';
import * as chiTietPhieuThuController from '../controllers/chiTietPhieuThuController.js';
const router = express.Router();

router.get('/:id', chiTietPhieuThuController.getAllChiTietPhieuThuByPhieuThuIdController);
router.post('/', chiTietPhieuThuController.createChiTietPhieuThuController);
router.put('/:id', chiTietPhieuThuController.updateChiTietPhieuThuController);
router.delete('/:id', chiTietPhieuThuController.hideChiTietPhieuThuController);

export default router;