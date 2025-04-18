import express from 'express';
import {
    createWebPageController, deleteWebPageController,
    getAllWebPageController,
    getWebPageByIdController, updateWebPageController
} from "../controllers/webPageController.js";

const router = express.Router();

router.post('/', createWebPageController);

router.get('/', getAllWebPageController);

router.put('/', updateWebPageController);

router.delete('/:id', deleteWebPageController);

router.get('/:id', getWebPageByIdController);

export default router;
