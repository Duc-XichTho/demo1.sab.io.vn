import express from 'express';
import {
  createKTQTKenhController,
  getAllKTQTKenhController,
  updateKTQTKenhController,
  deleteKTQTKenhController,
} from '../controllers/ktqtKenhController.js';

const router = express.Router();

router.post('/', createKTQTKenhController);

router.get('/', getAllKTQTKenhController);

router.put('/', updateKTQTKenhController);

router.delete('/:id', deleteKTQTKenhController);

export default router;
