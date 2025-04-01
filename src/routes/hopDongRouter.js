import express from 'express';
import {
    createHopDongController, deleteHopDongController,
    getAllHopDongController,
    getHopDongByIdController, updateHopDongController
} from "../controllers/hopDongController.js";

const router = express.Router();

router.post('/', createHopDongController);

router.get('/', getAllHopDongController);

router.put('/', updateHopDongController);

router.delete('/:id', deleteHopDongController);

router.get('/:id', getHopDongByIdController);

export default router;
