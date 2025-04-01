import express from 'express';
import {
    createCostPoolController, deleteCostPoolController,
    getAllCostPoolController,
    getCostPoolByIdController, updateCostPoolController
} from "../controllers/costPoolController.js";

const router = express.Router();

router.post('/', createCostPoolController);

router.get('/', getAllCostPoolController);

router.put('/', updateCostPoolController);

router.delete('/:id', deleteCostPoolController);

router.get('/:id', getCostPoolByIdController);

export default router;
