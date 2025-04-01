import express from 'express';
import {
    createTagController, deleteTagController,
    getAllTagController,
    getTagByIdController, updateTagController
} from "../controllers/tagController.js";

const router = express.Router();

router.post('/', createTagController);

router.get('/', getAllTagController);

router.put('/', updateTagController);

router.delete('/:id', deleteTagController);

router.get('/:id', getTagByIdController);

export default router;
