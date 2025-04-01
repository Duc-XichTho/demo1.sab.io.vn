import express from 'express';
import {
  createKTQTVasController,
  getAllKTQTVasController,
  updateKTQTVasController,
  deleteKTQTVasController,
} from '../controllers/ktqtVasController.js';

const router = express.Router();

router.post('/', createKTQTVasController);

router.get('/', getAllKTQTVasController);

router.put('/', updateKTQTVasController);

router.delete('/:id', deleteKTQTVasController);

export default router;
