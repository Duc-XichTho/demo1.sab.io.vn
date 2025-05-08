import express from 'express';
import {
    createKpiKQKDController, deleteKpiKQKDController,
    getAllKpiKQKDController,
    getKpiKQKDByIdController, getKpiKQKDByIdKHKDController, updateKpiKQKDController
} from "../controllers/kpiKQKDController.js";

const router = express.Router();

router.post('/', createKpiKQKDController);

router.get('/', getAllKpiKQKDController);

router.put('/', updateKpiKQKDController);

router.delete('/:id', deleteKpiKQKDController);

router.get('/:id', getKpiKQKDByIdController);
router.get('/khkd-tong-hop/:id', getKpiKQKDByIdKHKDController);

export default router;
