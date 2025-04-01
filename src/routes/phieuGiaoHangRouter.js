import express from 'express';
import * as phieuGiaoHangController from '../controllers/phieuGiaoHangController.js';
const router = express.Router();

router.get('/', phieuGiaoHangController.getAllPhieuGiaoHangController);
router.post('/', phieuGiaoHangController.createPhieuGiaoHangController);
router.put('/:id', phieuGiaoHangController.updatePhieuGiaoHangController);
router.delete('/:id', phieuGiaoHangController.hidePhieuGiaoHangController);
router.get('/card/:cardId', phieuGiaoHangController.getPhieuGiaoHangByCardIdServiceController);

export default router;