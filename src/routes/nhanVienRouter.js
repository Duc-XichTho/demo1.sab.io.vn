import express from 'express';
import {
    createNhanVienController, deleteNhanVienController,
    getAllNhanVienController,
    getNhanVienByIdController, updateNhanVienController
} from "../controllers/nhanVienController.js";

const router = express.Router();

router.post('/', createNhanVienController);

router.get('/', getAllNhanVienController);

router.put('/', updateNhanVienController);

router.delete('/:id', deleteNhanVienController);

router.get('/:id', getNhanVienByIdController);

export default router;
