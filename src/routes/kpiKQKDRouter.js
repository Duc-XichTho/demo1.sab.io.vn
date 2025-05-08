import express from 'express';
import {
    createKpiKQKDController, deleteKpiKQKDController,
    getAllKpiKQKDController,
    getKpiKQKDByIdController, updateKpiKQKDController
} from "../controllers/kpiKQKDController.js";

const router = express.Router();

router.post('/', createKpiKQKDController);

router.get('/', getAllKpiKQKDController);

router.put('/', updateKpiKQKDController);

router.delete('/:id', deleteKpiKQKDController);

router.get('/:id', getKpiKQKDByIdController);

export default router;
