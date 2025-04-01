import express from 'express';
import {
    getDieuChuyenKhoByCardIdController,
    createDieuChuyenKhoController,
    deleteDieuChuyenKhoController,
    getAllDieuChuyenKhoController,
    getDieuChuyenKhoByIdController,
    updateDieuChuyenKhoController
} from "../controllers/dieuChuyenKhoController.js";

const router = express.Router();

router.post('/', createDieuChuyenKhoController);

router.get('/', getAllDieuChuyenKhoController);

router.put('/', updateDieuChuyenKhoController);

router.delete('/:id', deleteDieuChuyenKhoController);

router.get('/card/:id', getDieuChuyenKhoByCardIdController);

router.get('/:id', getDieuChuyenKhoByIdController);

export default router;