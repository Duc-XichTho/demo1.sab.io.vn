import express from 'express';
import {
    getPhieuXuatByCardIdController,
    createPhieuXuatController,
    deletePhieuXuatController,
    getAllPhieuXuatController,
    getPhieuXuatByIdController,
    updatePhieuXuatController
} from "../controllers/phieuXuatController.js";

const router = express.Router();

router.post('/', createPhieuXuatController);

router.get('/', getAllPhieuXuatController);

router.put('/', updatePhieuXuatController);

router.delete('/:id', deletePhieuXuatController);

router.get('/card/:id', getPhieuXuatByCardIdController);

router.get('/:id', getPhieuXuatByIdController);

export default router;