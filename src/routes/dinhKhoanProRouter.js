import express from 'express';
import {
    getAllDinhKhoanProController,
    getDinhKhoanProByIdController,
    getDinhKhoanProBySubStepAndCardIdController,
    updateDinhKhoanProController,
    createDinhKhoanProController,
    deleteDinhKhoanProController
} from '../controllers/dinhKhoanProController.js';

const router = express.Router();

router.get('/', getAllDinhKhoanProController);

router.get('/:id', getDinhKhoanProByIdController);

router.get('/subStep/:subStepId/card/:idCard', getDinhKhoanProBySubStepAndCardIdController);

router.put('/', updateDinhKhoanProController);

router.post('/', createDinhKhoanProController);

router.delete('/:id', deleteDinhKhoanProController);

export default router;