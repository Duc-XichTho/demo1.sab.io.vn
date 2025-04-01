import express from 'express';
import {
    createChuongTrinhController, deleteChuongTrinhController,
    getAllChuongTrinhController,
    getChuongTrinhByIdController, updateChuongTrinhController
} from "../controllers/chuongTrinhController.js";

const router = express.Router();

router.post('/', createChuongTrinhController);

router.get('/', getAllChuongTrinhController);

router.put('/', updateChuongTrinhController);

router.delete('/:id', deleteChuongTrinhController);

router.get('/:id', getChuongTrinhByIdController);

export default router;
