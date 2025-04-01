import express from 'express';
import {
    createThueController, deleteThueController,
    getAllThueController,
    getThueByIdController, updateThueController
} from "../controllers/thueController.js";

const router = express.Router();

router.post('/', createThueController);

router.get('/', getAllThueController);

router.put('/', updateThueController);

router.delete('/:id', deleteThueController);

router.get('/:id', getThueByIdController);

export default router;
