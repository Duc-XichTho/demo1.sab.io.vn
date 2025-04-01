import express from 'express';
import {
    createPMVCategoriesController, deletePMVCategoriesController,
    getAllPMVCategoriesController,
    getPMVCategoriesByIdController, updatePMVCategoriesController
} from "../controllers/pmvCategoriesController.js";

const router = express.Router();

router.post('/', createPMVCategoriesController);

router.get('/', getAllPMVCategoriesController);

router.put('/', updatePMVCategoriesController);

router.delete('/:id', deletePMVCategoriesController);

router.get('/:id', getPMVCategoriesByIdController);

export default router;
