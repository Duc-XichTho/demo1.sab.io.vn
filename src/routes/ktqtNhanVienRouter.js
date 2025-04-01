import express from 'express';
import {
    createKtqtNhanVienController, deleteKtqtNhanVienController,
    getAllKtqtNhanVienController,
    getKtqtNhanVienByIdController, updateKtqtNhanVienController
} from "../controllers/ktqtNhanVienController.js";

const router = express.Router();

router.post('/', createKtqtNhanVienController);

router.get('/', getAllKtqtNhanVienController);

router.put('/', updateKtqtNhanVienController);

router.delete('/:id', deleteKtqtNhanVienController);

router.get('/:id', getKtqtNhanVienByIdController);

export default router;
