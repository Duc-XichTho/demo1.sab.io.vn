import express from 'express';
import {
    createKhachHangController, deleteKhachHangController,
    getAllKhachHangController,
    getKhachHangByIdController, updateKhachHangController
} from "../controllers/khachHangController.js";

const router = express.Router();

router.post('/', createKhachHangController);

router.get('/', getAllKhachHangController);

router.put('/', updateKhachHangController);

router.delete('/:id', deleteKhachHangController);

router.get('/:id', getKhachHangByIdController);

export default router;
