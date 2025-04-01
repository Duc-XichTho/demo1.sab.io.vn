import express from 'express';
import {
  createKTQTProductController,
  getAllKTQTProductController,
  updateKTQTProductController,
  deleteKTQTProductController,
} from '../controllers/ktqtProductController.js';

const router = express.Router();

router.post('/', createKTQTProductController);

router.get('/', getAllKTQTProductController);

router.put('/', updateKTQTProductController);

router.delete('/:id', deleteKTQTProductController);

export default router;
