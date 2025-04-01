import express from 'express';
import {
    createPhieuNhapController, deletePhieuNhapController,
    getAllPhieuNhapController, getPhieuNhapByIdCardController,
    getPhieuNhapByIdController, updatePhieuNhapController
} from "../controllers/phieuNhapController.js";

const router = express.Router();

router.post('/', createPhieuNhapController);

router.get('/', getAllPhieuNhapController);

router.put('/', updatePhieuNhapController);

router.delete('/:id', deletePhieuNhapController);

router.get('/:id', getPhieuNhapByIdController);
router.get('/card/:id', getPhieuNhapByIdCardController);

export default router;
