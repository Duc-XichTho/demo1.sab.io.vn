import express from 'express';
import {
    createKtqtNhaCungCapController, deleteKtqtNhaCungCapController,
    getAllKtqtNhaCungCapController,
    getKtqtNhaCungCapByIdController, updateKtqtNhaCungCapController
} from "../controllers/ktqtNhaCungCapController.js";

const router = express.Router();

router.post('/', createKtqtNhaCungCapController);

router.get('/', getAllKtqtNhaCungCapController);

router.put('/', updateKtqtNhaCungCapController);

router.delete('/:id', deleteKtqtNhaCungCapController);

router.get('/:id', getKtqtNhaCungCapByIdController);

export default router;
