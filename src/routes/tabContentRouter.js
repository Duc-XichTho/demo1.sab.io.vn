import express from 'express';
import {
    getAllTabContentController,
    updateTabContentController,
    createTabContentController
} from '../controllers/tabContentController.js';

const router = express.Router();

// GET
router.get('/', getAllTabContentController);

// UPDATE
router.post('/', updateTabContentController);

// CREATE
router.post('/create', createTabContentController);

export default router;