import express from 'express';
import { getAllSoKeToanController } from '../../controllers/soKeToanController.js';

const router = express.Router();

router.get('/', getAllSoKeToanController);

export default router;
