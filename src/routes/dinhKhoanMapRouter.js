import express from 'express';
import {
    getAllDinhKhoanMapController,
    createDinhKhoanMapController,
    updateDinhKhoanMapController,
    deleteDinhKhoanMapController
} from '../controllers/dinhKhoanMapController.js';

const router = express.Router();

router.get('/', getAllDinhKhoanMapController);

router.post('/', createDinhKhoanMapController);

router.put('/', updateDinhKhoanMapController);

router.delete('/:id', deleteDinhKhoanMapController);

export default router;