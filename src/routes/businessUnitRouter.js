import express from 'express';
import {
    createBusinessUnitController,
    deleteBusinessUnitController,
    getAllBusinessUnitController,
    getBusinessUnitByIdController,
    updateBusinessUnitController
} from "../controllers/businessUnitController.js";

const router = express.Router();

router.post('/', createBusinessUnitController);

router.get('/', getAllBusinessUnitController);

router.put('/', updateBusinessUnitController);

router.delete('/:id', deleteBusinessUnitController);

router.get('/:id', getBusinessUnitByIdController);

export default router;
