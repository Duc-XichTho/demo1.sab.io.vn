import express from 'express';
import {
    getAllSoQuanLyChiTraTruocController,
    createSoQuanLyChiTraTruocController,
    updateSoQuanLyChiTraTruocController,
    deleteSoQuanLyChiTraTruocController
} from "../controllers/soQuanLyChiTraTruocController.js";

const router = express.Router();

// GET
router.get('/', getAllSoQuanLyChiTraTruocController);

// CREATE
router.post('/', createSoQuanLyChiTraTruocController);

// UPDATE
router.put('/', updateSoQuanLyChiTraTruocController);

// DELETE
router.delete('/:id', deleteSoQuanLyChiTraTruocController);

export default router;