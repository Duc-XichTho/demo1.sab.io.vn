import express from 'express';
import {
    createFileChildController, deleteFileChildController,
    getAllFileChildController,
    getFileChildByIdController, updateFileChildController
} from "../controllers/fileChildController.js";

const router = express.Router();

router.post('/', createFileChildController);

router.get('/', getAllFileChildController);

router.put('/', updateFileChildController);

router.delete('/:id', deleteFileChildController);

router.get('/:id', getFileChildByIdController);

export default router;
