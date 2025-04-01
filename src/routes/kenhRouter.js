import express from 'express';
import {
  createKenhController,
  getAllKenhController,
  updateKenhController,
  deleteKenhController,
} from '../controllers/kenhController.js';

const router = express.Router();

router.post('/', createKenhController);

router.get('/', getAllKenhController);

router.put('/', updateKenhController);

router.delete('/:id', deleteKenhController);

export default router;
