import express from 'express';
import {
  createDonViTinhController,
  getAllDonViTinhController,
  updateDonViTinhController,
  deleteDonViTinhController,
} from '../controllers/donViTinhController.js';

const router = express.Router();

router.post('/', createDonViTinhController);

router.get('/', getAllDonViTinhController);

router.put('/', updateDonViTinhController);

router.delete('/:id', deleteDonViTinhController);

export default router;
