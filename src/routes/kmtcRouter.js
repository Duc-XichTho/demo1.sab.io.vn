import express from 'express';
import {
    createKmtcController, deleteKmtcController,
    getAllKmtcController,
    getKmtcByIdController, updateKmtcController
} from "../controllers/kmtcController.js";

const router = express.Router();

router.post('/', createKmtcController);

router.get('/', getAllKmtcController);

router.put('/', updateKmtcController);

router.delete('/:id', deleteKmtcController);

router.get('/:id', getKmtcByIdController);

export default router;
