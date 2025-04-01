import express from 'express';
import {
    createNganhController, deleteNganhController,
    getAllNganhController,
    getNganhByIdController, updateNganhController
} from "../controllers/nganhController.js";

const router = express.Router();

router.post('/', createNganhController);

router.get('/', getAllNganhController);

router.put('/', updateNganhController);

router.delete('/:id', deleteNganhController);

router.get('/:id', getNganhByIdController);

export default router;
