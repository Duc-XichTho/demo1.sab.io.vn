import express from 'express';
import * as phieuChi2DetailController from '../controllers/phieuChi2DetailController.js';
import * as tamUngDetailController from "../controllers/tamUngDetailController.js";
const router = express.Router();

router.get('/:id', phieuChi2DetailController.getAllPhieuChi2DetailByPhieuChi2IdController);
router.post('/', phieuChi2DetailController.createPhieuChi2DetailController);
router.put('/:id', phieuChi2DetailController.updatePhieuChi2DetailController);
router.delete('/:id', phieuChi2DetailController.deletePhieuChi2DetailController);

export default router;