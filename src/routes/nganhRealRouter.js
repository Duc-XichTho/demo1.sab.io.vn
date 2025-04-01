import express from 'express';
import {
    createNganhRealController, deleteNganhRealController,
    getAllNganhRealController,
    getNganhRealByIdController, updateNganhRealController
} from "../controllers/nganhRealController.js";

const router = express.Router();

router.post('/', createNganhRealController);

router.get('/', getAllNganhRealController);

router.put('/', updateNganhRealController);

router.delete('/:id', deleteNganhRealController);

router.get('/:id', getNganhRealByIdController);

export default router;
