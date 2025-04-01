import express from 'express';
import {
    createChartTemplateController, deleteChartTemplateController,
    getAllChartTemplateController,
    getChartTemplateByIdController, updateChartTemplateController
} from "../controllers/chartTemplateController.js";

const router = express.Router();

router.post('/', createChartTemplateController);

router.get('/', getAllChartTemplateController);

router.put('/', updateChartTemplateController);

router.delete('/:id', deleteChartTemplateController);

router.get('/:id', getChartTemplateByIdController);

export default router;
