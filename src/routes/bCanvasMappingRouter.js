import express from 'express';
import {
    createBCanvasMappingController, deleteBCanvasMappingController,
    getAllBCanvasMappingController,
    getBCanvasMappingByIdController, updateBCanvasMappingController
} from "../controllers/bCanvasMappingController.js";

const router = express.Router();

router.post('/', createBCanvasMappingController);

router.get('/', getAllBCanvasMappingController);

router.put('/', updateBCanvasMappingController);

router.delete('/:id', deleteBCanvasMappingController);

router.get('/:id', getBCanvasMappingByIdController);

export default router;
