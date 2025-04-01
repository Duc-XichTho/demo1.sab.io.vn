import express from 'express';
import {
    createDetailPhieuXuatController,
    deleteDetailPhieuXuatController,
    getAllDetailPhieuXuatController,
    getDetailPhieuXuatByPhieuXuatIdController,
    getFullDetailPhieuXuatController,
    updateDetailPhieuXuatController
} from "../controllers/detailPhieuXuatController.js";

const router = express.Router();

router.get('/', getAllDetailPhieuXuatController);
router.get('/full', getFullDetailPhieuXuatController);
router.get('/:id', getDetailPhieuXuatByPhieuXuatIdController);
router.post('/', createDetailPhieuXuatController);
router.put('/', updateDetailPhieuXuatController);
router.delete('/:id', deleteDetailPhieuXuatController);


export default router;
