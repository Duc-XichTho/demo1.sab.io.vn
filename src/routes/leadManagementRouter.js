import express from 'express';
import {
    createLeadManagementController, deleteLeadManagementController,
    getAllLeadManagementController,
    getLeadManagementByIdController, updateLeadManagementController
} from "../controllers/leadManagementController.js";

const router = express.Router();

router.post('/', createLeadManagementController);

router.get('/', getAllLeadManagementController);

router.put('/', updateLeadManagementController);

router.delete('/:id', deleteLeadManagementController);

router.get('/:id', getLeadManagementByIdController);

export default router;
