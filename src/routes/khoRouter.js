import express from 'express';
import {
    createKhoController, deleteKhoController,
    getAllKhoController,
    getKhoByIdController, updateKhoController
} from "../controllers/khoController.js";

const router = express.Router();

router.post('/', createKhoController);

router.get('/', getAllKhoController);

router.put('/', updateKhoController);

router.delete('/:id', deleteKhoController);

router.get('/:id', getKhoByIdController);

export default router;
