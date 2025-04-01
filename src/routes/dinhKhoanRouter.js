import express from 'express';
import {
    getAllDinhKhoanController,
    getDinhKhoanByIdController,
    updateDinhKhoanController,
    createDinhKhoanController,
    deleteDinhKhoanController
} from '../controllers/dinhKhoanController.js';

const router = express.Router();

router.get('/', getAllDinhKhoanController);

router.get('/:id', getDinhKhoanByIdController);

router.put('/', updateDinhKhoanController);

router.post('/', createDinhKhoanController);

router.delete('/:id', deleteDinhKhoanController);

export default router;