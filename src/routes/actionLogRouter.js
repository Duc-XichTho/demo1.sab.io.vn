import express from 'express';
import {
    createActionLogController, deleteActionLogController,
    getAllActionLogController,
    getActionLogByIdController, updateActionLogController
} from "../controllers/actionLogController.js";

const router = express.Router();

router.post('/', createActionLogController);

router.get('/', getAllActionLogController);

router.put('/', updateActionLogController);

router.delete('/:id', deleteActionLogController);

router.get('/:id', getActionLogByIdController);

export default router;
