import express from 'express';
import {
    createKmfController, deleteKmfController,
    getAllKmfController,
    getKmfByIdController, updateKmfController
} from "../controllers/kmfController.js";

const router = express.Router();

router.post('/', createKmfController);

router.get('/', getAllKmfController);

router.put('/', updateKmfController);

router.delete('/:id', deleteKmfController);

router.get('/:id', getKmfByIdController);

export default router;
