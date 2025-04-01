import express from 'express';
import {
    createQuanLyTagController, deleteQuanLyTagController,
    getAllQuanLyTagController,
    getQuanLyTagByIdController, updateQuanLyTagController
} from "../controllers/quanLyTagController.js";

const router = express.Router();

router.post('/', createQuanLyTagController);

router.get('/', getAllQuanLyTagController);

router.put('/', updateQuanLyTagController);

router.delete('/:id', deleteQuanLyTagController);

router.get('/:id', getQuanLyTagByIdController);

export default router;
