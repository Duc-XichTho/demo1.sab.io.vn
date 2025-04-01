import express from 'express';
import {
    createPlCategoryController, deletePlCategoryController,
    getAllPlCategoryController,
    getPlCategoryByIdController, updatePlCategoryController
} from "../controllers/plCategoryController.js";

const router = express.Router();

router.post('/', createPlCategoryController);

router.get('/', getAllPlCategoryController);

router.put('/', updatePlCategoryController);

router.delete('/:id', deletePlCategoryController);

router.get('/:id', getPlCategoryByIdController);

export default router;
