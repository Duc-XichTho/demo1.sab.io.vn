import express from 'express';
import {
  createKTQTPlanController,
  deleteKTQTPlanController,
  getAllKTQTPlanController,
  updateKTQTPlanController
} from "../controllers/ktqtPlanController.js";

const router = express.Router();

router.post('/', createKTQTPlanController);

router.get('/', getAllKTQTPlanController);

router.put('/', updateKTQTPlanController);

router.delete('/:id', deleteKTQTPlanController);

export default router;
