import express from 'express';
import {
  createPhongBanController,
  getAllPhongBanController,
  updatePhongBanController,
  deletePhongBanController,
} from '../controllers/phongBanController.js';

const router = express.Router();

router.post('/', createPhongBanController);

router.get('/', getAllPhongBanController);

router.put('/', updatePhongBanController);

router.delete('/:id', deletePhongBanController);

export default router;
