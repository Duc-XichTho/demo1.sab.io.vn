import express from 'express';
import {
    createStoryWebPageController, deleteStoryWebPageController,
    getAllStoryWebPageController,
    getStoryWebPageByIdController, getStoryWebPageByIdWebPageController, updateStoryWebPageController
} from "../controllers/storyWebPageController.js";

const router = express.Router();

router.post('/', createStoryWebPageController);

router.get('/', getAllStoryWebPageController);

router.put('/', updateStoryWebPageController);

router.delete('/:id', deleteStoryWebPageController);

router.get('/:id', getStoryWebPageByIdController);
router.get('/web-page/:id', getStoryWebPageByIdWebPageController);

export default router;
