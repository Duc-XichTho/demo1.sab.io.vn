import express from 'express';
import {
    createBCanvasDataOriginalRowController,
    deleteBCanvasDataOriginalRowController,
    getAllBCanvasDataOriginalRowController,
    getBCanvasDataOriginalRowByIdController,
    getBCanvasDataOriginalRowByIdDataOriginalController,
    updateBCanvasDataOriginalRowController
} from "../controllers/bCanvasDataOriginalRowController.js";

const router = express.Router();

router.post('/', createBCanvasDataOriginalRowController);

router.get('/', getAllBCanvasDataOriginalRowController);

router.put('/', updateBCanvasDataOriginalRowController);

router.delete('/:id', deleteBCanvasDataOriginalRowController);

router.get('/:id', getBCanvasDataOriginalRowByIdController);
router.get('/data-original/:id', getBCanvasDataOriginalRowByIdDataOriginalController);

export default router;
