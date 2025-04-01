import express from 'express';
import {
  createKTQTKmfController,
  getAllKTQTKmfController,
  updateKTQTKmfController,
  deleteKTQTKmfController,
} from '../controllers/ktqtKmfController.js';

const router = express.Router();

router.post('/', createKTQTKmfController);

router.get('/', getAllKTQTKmfController);

router.put('/', updateKTQTKmfController);

router.delete('/:id', deleteKTQTKmfController);

export default router;
