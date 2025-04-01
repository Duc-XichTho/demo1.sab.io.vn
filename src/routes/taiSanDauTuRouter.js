import express from 'express';
import {
    createTaiSanDauTuController, deleteTaiSanDauTuController,
    getAllTaiSanDauTuController,
    getTaiSanDauTuByIdController, updateTaiSanDauTuController
} from "../controllers/taiSanDauTuController.js";

const router = express.Router();

router.post('/', createTaiSanDauTuController);

router.get('/', getAllTaiSanDauTuController);

router.put('/', updateTaiSanDauTuController);

router.delete('/:id', deleteTaiSanDauTuController);

router.get('/:id', getTaiSanDauTuByIdController);

export default router;
