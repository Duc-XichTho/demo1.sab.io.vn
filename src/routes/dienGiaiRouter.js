import express from 'express';
import {
    createDienGiaiController,
    deleteDienGiaiController,
    getAllDienGiaiController,
    getDienGiaiByIdController,
    getDienGiaiByNameController,
    updateDienGiaiController,
} from '../controllers/dienGiaiController.js';

const router = express.Router();

router.post('/', createDienGiaiController);
router.get('/', getAllDienGiaiController);
router.put('/', updateDienGiaiController);
router.delete('/:id', deleteDienGiaiController);

router.get('/name/:name', getDienGiaiByNameController);
router.get('/:id', getDienGiaiByIdController);

export default router;
