import express from 'express';
import {
  createLoaiTienController,
  getAllLoaiTienController,
  updateLoaiTienController,
  deleteLoaiTienController,
} from '../controllers/loaiTienController.js';

const router = express.Router();

router.post('/', createLoaiTienController);

router.get('/', getAllLoaiTienController);

router.put('/', updateLoaiTienController);

router.delete('/:id', deleteLoaiTienController);

export default router;
