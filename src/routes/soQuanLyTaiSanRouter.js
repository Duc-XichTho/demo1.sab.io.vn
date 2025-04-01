import express from 'express';
import {
    getAllSoQuanLyTaiSanController,
    createSoQuanLyTaiSanController,
    updateSoQuanLyTaiSanController,
    deleteSoQuanLyTaiSanController
} from "../controllers/soQuanLyTaiSanController.js";

const router = express.Router();

// GET
router.get('/', getAllSoQuanLyTaiSanController);

// CREATE
router.post('/', createSoQuanLyTaiSanController);

// UPDATE
router.put('/', updateSoQuanLyTaiSanController);

// DELETE
router.delete('/:id', deleteSoQuanLyTaiSanController);

export default router;