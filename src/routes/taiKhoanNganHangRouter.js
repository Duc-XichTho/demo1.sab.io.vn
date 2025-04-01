import express from 'express';
import {
    createTaiKhoanNganHangController, deleteTaiKhoanNganHangController,
    getAllTaiKhoanNganHangController,
    getTaiKhoanNganHangByIdController, updateTaiKhoanNganHangController
} from "../controllers/taiKhoanNganHangController.js";

const router = express.Router();

router.post('/', createTaiKhoanNganHangController);

router.get('/', getAllTaiKhoanNganHangController);

router.put('/', updateTaiKhoanNganHangController);

router.delete('/:id', deleteTaiKhoanNganHangController);

router.get('/:id', getTaiKhoanNganHangByIdController);

export default router;
