import express from 'express';
import {
  createTeamController,
  getAllTeamController,
  updateTeamController,
  deleteTeamController,
} from '../controllers/ktqtUnitController.js';

const router = express.Router();

router.post('/', createTeamController);

router.get('/', getAllTeamController);

router.put('/', updateTeamController);

router.delete('/:id', deleteTeamController);

export default router;
