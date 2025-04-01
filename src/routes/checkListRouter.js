import express from 'express';
import {
    getAllCheckListController,
    getCheckListByIdController,
    updateCheckListController,
    createCheckListController,
    deleteCheckListController
} from '../controllers/checkListController.js';

const router = express.Router();

router.get('/', getAllCheckListController);

router.get('/:id', getCheckListByIdController);

router.put('/', updateCheckListController);

router.post('/', createCheckListController);

router.delete('/:id', deleteCheckListController);

export default router;