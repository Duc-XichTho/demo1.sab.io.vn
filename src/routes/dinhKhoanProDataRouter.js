import express from 'express';
import {
    getDinhKhoanProDataByDinhKhoanIdController,
    updateDinhKhoanProDataController,
    createDinhKhoanProDataController,
    deleteDinhKhoanProDataController,
    getAllDinhKhoanProDataController,
} from '../controllers/dinhKhoanProDataController.js';

const router = express.Router();

router.get('/:dinhKhoan_id', getDinhKhoanProDataByDinhKhoanIdController);

router.get('', getAllDinhKhoanProDataController);

router.put('/', updateDinhKhoanProDataController);

router.post('/', createDinhKhoanProDataController);

router.delete('/:id', deleteDinhKhoanProDataController);

export default router;
