import express from 'express';
import {
    createBCanvasDataOriginalController, deleteBCanvasDataOriginalController,
    getAllBCanvasDataOriginalController,
    getBCanvasDataOriginalWithRowByIdController, updateBCanvasDataOriginalController
} from "../controllers/bCanvasDataOriginalController.js";

const router = express.Router();

router.post('/', createBCanvasDataOriginalController);

router.get('/', getAllBCanvasDataOriginalController);

router.put('/', updateBCanvasDataOriginalController);

router.delete('/:id', deleteBCanvasDataOriginalController);

router.get('/:id', getBCanvasDataOriginalWithRowByIdController);

export default router;
