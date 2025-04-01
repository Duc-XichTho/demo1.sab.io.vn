import express from 'express';
import * as detailPhieuChiController from '../controllers/detailPhieuChiController.js';
const router = express.Router();

router.get('/:id', detailPhieuChiController.getAllDetailPhieuChiByPhieuChiIdController);
router.post('/', detailPhieuChiController.createDetailPhieuChiController);
router.put('/:id', detailPhieuChiController.updateDetailPhieuChiController);
router.delete('/:id', detailPhieuChiController.hideDetailPhieuChiController);

export default router;