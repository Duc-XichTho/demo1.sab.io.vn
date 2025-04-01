import express from 'express';
import {
    getAllDinhMucSPController,
    getAllDinhMucNLBySPIdController,
    createDinhMucNLController,
    createDinhMucSPController,
    updateDinhMucNLController,
    updateDinhMucSPController,
    deleteDinhMucNLController,
    deleteDinhMucSPController
} from '../controllers/dinhMucBomController.js';

const router = express.Router();

// GET
router.get('/', getAllDinhMucSPController);
router.get('/:idSP', getAllDinhMucNLBySPIdController);

// CREATE
router.post('/', createDinhMucSPController);
router.post('/nl', createDinhMucNLController);

// UPDATE
router.put('/', updateDinhMucSPController);
router.put('/nl', updateDinhMucNLController);

// DELETE
router.delete('/:id', deleteDinhMucSPController);
router.delete('/nl/:id', deleteDinhMucNLController);

export default router;