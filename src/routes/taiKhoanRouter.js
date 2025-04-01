import express from 'express';
import {
    createTaiKhoanController, deleteTaiKhoanController,
    getAllTaiKhoanController,
    getTaiKhoanByIdController, updateTaiKhoanController
} from "../controllers/taiKhoanController.js";

const router = express.Router();

router.post('/', createTaiKhoanController);

router.get('/', getAllTaiKhoanController);

router.put('/', updateTaiKhoanController);

router.delete('/:id', deleteTaiKhoanController);

router.get('/:id', getTaiKhoanByIdController);

export default router;
