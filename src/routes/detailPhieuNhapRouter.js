import express from 'express';
import {
    getFullDetailPhieuNhapController,
    createDetailPhieuNhapController,
    deleteDetailPhieuNhapController,
    getAllDetailPhieuNhapController,
    getDetailPhieuNhapByIdController,
    updateDetailPhieuNhapController, getDetailPhieuNhapByPhieuNhapIdController
} from "../controllers/detailPhieuNhapController.js";

const router = express.Router();

router.get('/full', getFullDetailPhieuNhapController);

router.post('/', createDetailPhieuNhapController);

router.get('/', getAllDetailPhieuNhapController);

router.put('/', updateDetailPhieuNhapController);

router.delete('/:id', deleteDetailPhieuNhapController);

router.get('/:id', getDetailPhieuNhapByIdController);
router.get('/phieuNhap/:id', getDetailPhieuNhapByPhieuNhapIdController);

export default router;
