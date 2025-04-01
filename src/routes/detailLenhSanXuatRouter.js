import express from 'express';
import {
    createDetailLenhSanXuatController, deleteDetailLenhSanXuatController,
    getAllDetailLenhSanXuatController,
    getDetailLenhSanXuatByIdController, updateDetailLenhSanXuatController
} from "../controllers/detailLenhSanXuatController.js";

const router = express.Router();

router.post('/', createDetailLenhSanXuatController);

router.get('/', getAllDetailLenhSanXuatController);

router.put('/', updateDetailLenhSanXuatController);

router.delete('/:id', deleteDetailLenhSanXuatController);

router.get('/:id', getDetailLenhSanXuatByIdController);

export default router;
