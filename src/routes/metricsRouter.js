import express from 'express';
import {
    createMetricsController, deleteMetricsController,
    getAllMetricsController,
    getMetricsByIdController, updateMetricsController
} from "../controllers/metricsController.js";

const router = express.Router();

router.post('/', createMetricsController);

router.get('/', getAllMetricsController);

router.put('/', updateMetricsController);

router.delete('/:id', deleteMetricsController);

router.get('/:id', getMetricsByIdController);

export default router;
