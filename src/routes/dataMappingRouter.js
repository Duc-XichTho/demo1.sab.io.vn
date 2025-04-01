import express from 'express';
import {
    createDataMappingController, deleteDataMappingController,
    getAllDataMappingController,
    getDataMappingByIdController, updateDataMappingController
} from "../controllers/dataMappingController.js";

const router = express.Router();

router.post('/', createDataMappingController);

router.get('/', getAllDataMappingController);

router.put('/', updateDataMappingController);

router.delete('/:id', deleteDataMappingController);

router.get('/:id', getDataMappingByIdController);

export default router;
