import express from 'express';
import {
  createKTQTTeamController,
  getAllKTQTTeamController,
  updateKTQTTeamController,
  deleteKTQTTeamController,
} from '../controllers/ktqtTeamController.js';

const router = express.Router();

router.post('/', createKTQTTeamController);

router.get('/', getAllKTQTTeamController);

router.put('/', updateKTQTTeamController);

router.delete('/:id', deleteKTQTTeamController);

export default router;
