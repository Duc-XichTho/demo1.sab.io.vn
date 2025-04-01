import express from 'express';
import {
    createDuAnController,
    deleteDuAnController,
    getAllDuAnController,
    getDuAnByIdController,
    updateDuAnController
} from "../controllers/duAnController.js";

const router = express.Router();

router.post('/', createDuAnController);

router.get('/', getAllDuAnController);

router.put('/', updateDuAnController);

router.delete('/:id', deleteDuAnController);

router.get('/:id', getDuAnByIdController);

export default router;