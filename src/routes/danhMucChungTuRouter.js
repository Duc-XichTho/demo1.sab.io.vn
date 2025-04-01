import express from 'express';
import {
  createDanhMucChungTuController,
  getAllDanhMucChungTuController,
  updateDanhMucChungTuController,
  deleteDanhMucChungTuController,
} from '../controllers/danhMucChungTuController.js';

const router = express.Router();

router.post('/', createDanhMucChungTuController);

router.get('/', getAllDanhMucChungTuController);

router.put('/', updateDanhMucChungTuController);

router.delete('/:id', deleteDanhMucChungTuController);

export default router;
