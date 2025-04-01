import express from 'express';
import {
    createKtqtHopDongController, deleteKtqtHopDongController,
    getAllKtqtHopDongController,
    getKtqtHopDongByIdController, updateKtqtHopDongController
} from "../controllers/ktqtHopDongController.js";

const router = express.Router();

router.post('/', createKtqtHopDongController);

router.get('/', getAllKtqtHopDongController);

router.put('/', updateKtqtHopDongController);

router.delete('/:id', deleteKtqtHopDongController);

router.get('/:id', getKtqtHopDongByIdController);

export default router;
