import express from 'express';
import {
    createBCanvasDataOriginalController,
    deleteAllTemplateDataByDataOriginalController,
    deleteBCanvasDataOriginalController,
    getAllBCanvasDataOriginalController, getAllTemplateDataByDataOriginalController,
    getBCanvasDataOriginalWithRowByIdController,
    updateBCanvasDataOriginalController
} from "../controllers/bCanvasDataOriginalController.js";

const router = express.Router();

router.post('/', createBCanvasDataOriginalController);

router.get('/', getAllBCanvasDataOriginalController);

router.put('/', updateBCanvasDataOriginalController);

router.delete('/:id', deleteBCanvasDataOriginalController);

router.get('/:id', getBCanvasDataOriginalWithRowByIdController);

router.get('/template-data-by-original-data/:id', getAllTemplateDataByDataOriginalController);

router.delete('/template-data-by-original-data/:id', deleteAllTemplateDataByDataOriginalController);

export default router;
