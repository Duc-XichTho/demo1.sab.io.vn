import express from 'express';
import {
  createFileController,
  getAllFileController,
  updateFileController,
  deleteFileController,
} from '../controllers/fileController.js';

const router = express.Router();

router.post('/', createFileController);

router.get('/', getAllFileController);

router.put('/', updateFileController);

router.delete('/:id', deleteFileController);

export default router;
