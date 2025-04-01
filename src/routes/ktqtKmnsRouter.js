import express from 'express';
import {
  createKTQTKmnsController,
  getAllKTQTKmnsController,
  updateKTQTKmnsController,
  deleteKTQTKmnsController,
} from '../controllers/ktqtKmnsController.js';

const router = express.Router();

router.post('/', createKTQTKmnsController);

router.get('/', getAllKTQTKmnsController);

router.put('/', updateKTQTKmnsController);

router.delete('/:id', deleteKTQTKmnsController);

export default router;
