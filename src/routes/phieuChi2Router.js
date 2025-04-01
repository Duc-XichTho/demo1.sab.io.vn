import express from 'express';
import * as phieuChi2Controller from '../controllers/phieuChi2Controller.js';
const router = express.Router();

router.get('/', phieuChi2Controller.getAllPhieuChi2Controller);
router.post('/', phieuChi2Controller.createPhieuChi2Controller);
router.put('/:id', phieuChi2Controller.updatePhieuChi2Controller);
router.delete('/:id', phieuChi2Controller.deletePhieuChi2Controller);

export default router;