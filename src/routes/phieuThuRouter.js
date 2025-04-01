import express from 'express';
import {
    createPhieuThuController, deletePhieuThuController,
    getAllPhieuThuController, getPhieuThuByCardIdController,
    getPhieuThuByIdController, updatePhieuThuController
} from "../controllers/phieuThuController.js";

const router = express.Router();

router.post('/', createPhieuThuController);

router.get('/', getAllPhieuThuController);

router.put('/', updatePhieuThuController);

router.delete('/:id', deletePhieuThuController);

router.get('/:id', getPhieuThuByIdController);
router.get('/card/:id', getPhieuThuByCardIdController);

export default router;
