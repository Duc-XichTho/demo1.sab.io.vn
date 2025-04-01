import express from 'express';
import {
    createB0123Controller, deleteB0123Controller,
    getAllB0123Controller,
    getB0123ByIdController, updateB0123Controller
} from "../controllers/b0123Controller.js";

const router = express.Router();

router.post('/', createB0123Controller);

router.get('/', getAllB0123Controller);

router.put('/', updateB0123Controller);

router.delete('/:id', deleteB0123Controller);

router.get('/:id', getB0123ByIdController);

export default router;
