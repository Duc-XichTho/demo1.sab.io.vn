import express from 'express';
import {
    createNhaCungCapController, deleteNhaCungCapController,
    getAllNhaCungCapController,
    getNhaCungCapByIdController, updateNhaCungCapController
} from "../controllers/nhaCungCapController.js";

const router = express.Router();

router.post('/', createNhaCungCapController);

router.get('/', getAllNhaCungCapController);

router.put('/', updateNhaCungCapController);

router.delete('/:id', deleteNhaCungCapController);

router.get('/:id', getNhaCungCapByIdController);

export default router;
