import express from 'express';
import {
    createTemplateController, deleteTemplateController,
    getAllTemplateController,
    getTemplateByIdController, updateTemplateController
} from "../controllers/templateController.js";

const router = express.Router();

router.post('/', createTemplateController);

router.get('/', getAllTemplateController);

router.put('/', updateTemplateController);

router.delete('/:id', deleteTemplateController);

router.get('/:id', getTemplateByIdController);

export default router;
