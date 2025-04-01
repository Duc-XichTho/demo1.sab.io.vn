import express from 'express';
import {
    createPhieuChiController, deletePhieuChiController,
    getAllPhieuChiController, getPhieuChiByIdCardController,
    getPhieuChiByIdController, updatePhieuChiController
} from "../controllers/phieuChiController.js";

const router = express.Router();

router.post('/', createPhieuChiController);

router.get('/', getAllPhieuChiController);

router.put('/', updatePhieuChiController);

router.delete('/:id', deletePhieuChiController);

router.get('/:id', getPhieuChiByIdController);
router.get('/card/:id', getPhieuChiByIdCardController);

export default router;
