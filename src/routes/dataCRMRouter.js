import express from 'express';
import {
    createDataCRMController, deleteDataCRMController,
    getAllDataCRMController,
    getDataCRMByIdController, updateDataCRMController
} from "../controllers/dataCRMController.js";

const router = express.Router();

router.post('/', createDataCRMController);

router.get('/', getAllDataCRMController);

router.put('/', updateDataCRMController);

router.delete('/:id', deleteDataCRMController);

router.get('/:id', getDataCRMByIdController);

export default router;
