import express from 'express';
import {
    createBCanvasDataOriginalRowController, deleteBCanvasDataOriginalRowController,
    getAllBCanvasDataOriginalRowController,
    getBCanvasDataOriginalRowByIdController, updateBCanvasDataOriginalRowController
} from "../controllers/bCanvasDataOriginalRowController.js";

const router = express.Router();

router.post('/', createBCanvasDataOriginalRowController);

router.get('/', getAllBCanvasDataOriginalRowController);

router.put('/', updateBCanvasDataOriginalRowController);

router.delete('/:id', deleteBCanvasDataOriginalRowController);

router.get('/:id', getBCanvasDataOriginalRowByIdController);

export default router;
