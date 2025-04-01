import express from 'express';
import {
    createBusinessObjectiveController, deleteBusinessObjectiveController,
    getAllBusinessObjectiveController,
    getBusinessObjectiveByIdController, updateBusinessObjectiveController
} from "../controllers/businessObjectiveController.js";

const router = express.Router();

router.post('/', createBusinessObjectiveController);

router.get('/', getAllBusinessObjectiveController);

router.put('/', updateBusinessObjectiveController);

router.delete('/:id', deleteBusinessObjectiveController);

router.get('/:id', getBusinessObjectiveByIdController);

export default router;
