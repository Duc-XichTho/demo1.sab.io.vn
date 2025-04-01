import express from 'express';
import * as chiTietPhieuGiaoHangController from '../controllers/chiTietPhieuGiaoHangController.js';
const router = express.Router();

router.get('/:id', chiTietPhieuGiaoHangController.getAllChiTietPhieuGiaoHangByPhieuGiaoIdController);
router.post('/', chiTietPhieuGiaoHangController.createChiTietPhieuGiaoHangController);
router.put('/:id', chiTietPhieuGiaoHangController.updateChiTietPhieuGiaoHangController);
router.delete('/:id', chiTietPhieuGiaoHangController.hideChiTietPhieuGiaoHangController);

export default router;