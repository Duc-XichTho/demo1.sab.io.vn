import express from 'express';
import {
    createSoChuoiController, deleteSoChuoiController,
    getAllSoChuoiController,
    getSoChuoiByIdController, updateSoChuoiController
} from "../controllers/soChuoiController.js";

const router = express.Router();

router.post('/', createSoChuoiController);

router.get('/', getAllSoChuoiController);

router.put('/', updateSoChuoiController);

router.delete('/:id', deleteSoChuoiController);

router.get('/:id', getSoChuoiByIdController);

export default router;
