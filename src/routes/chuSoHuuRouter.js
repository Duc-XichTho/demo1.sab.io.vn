import express from 'express';
import {
    createChuSoHuuController, deleteChuSoHuuController,
    getAllChuSoHuuController,
    getChuSoHuuByIdController, updateChuSoHuuController
} from "../controllers/chuSoHuuController.js";

const router = express.Router();

router.post('/', createChuSoHuuController);

router.get('/', getAllChuSoHuuController);

router.put('/', updateChuSoHuuController);

router.delete('/:id', deleteChuSoHuuController);

router.get('/:id', getChuSoHuuByIdController);

export default router;
