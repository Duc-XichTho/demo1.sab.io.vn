import express from 'express';
import {
    createCashFlowCategoryController, deleteCashFlowCategoryController,
    getAllCashFlowCategoryController,
    getCashFlowCategoryByIdController, updateCashFlowCategoryController
} from "../controllers/cashFlowCategoryController.js";

const router = express.Router();

router.post('/', createCashFlowCategoryController);

router.get('/', getAllCashFlowCategoryController);

router.put('/', updateCashFlowCategoryController);

router.delete('/:id', deleteCashFlowCategoryController);

router.get('/:id', getCashFlowCategoryByIdController);

export default router;
