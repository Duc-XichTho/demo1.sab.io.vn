import express from 'express';
import {
  createKTQTCoChePhanBoController,
  getAllKTQTCoChePhanBoController,
  updateKTQTCoChePhanBoController,
  deleteKTQTCoChePhanBoController,
} from '../controllers/ktqtCoChePhanBoController.js';

const router = express.Router();

router.post('/', createKTQTCoChePhanBoController);

router.get('/', getAllKTQTCoChePhanBoController);

router.put('/', updateKTQTCoChePhanBoController);

router.delete('/:id', deleteKTQTCoChePhanBoController);

export default router;
