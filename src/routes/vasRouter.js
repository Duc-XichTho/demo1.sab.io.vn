import express from 'express';
import {
  createVasController,
  getAllVasController,
  updateVasController,
  deleteVasController,
} from '../controllers/vasController.js';

const router = express.Router();

router.post('/', createVasController);

router.get('/', getAllVasController);

router.put('/', updateVasController);

router.delete('/:id', deleteVasController);

export default router;
