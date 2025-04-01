import express from 'express';
import {
    getAllCategoryController,
    updateCategoryController,
    createCategoryController
} from '../controllers/categoryController.js';

const router = express.Router();

// GET
router.get('/', getAllCategoryController);

// UPDATE
router.post('/', updateCategoryController);

// CREATE
router.post('/create', createCategoryController);

export default router;