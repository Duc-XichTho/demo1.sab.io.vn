import express from 'express';
import {
    createHoaDonController, deleteHoaDonController,
    getAllHoaDonController, getHoaDonByCardIdController,
    getHoaDonByIdController, updateHoaDonController
} from "../controllers/hoaDonController.js";

const router = express.Router();

router.post('/', createHoaDonController);

router.get('/', getAllHoaDonController);

router.put('/', updateHoaDonController);

router.delete('/:id', deleteHoaDonController);

router.get('/:id', getHoaDonByIdController);
router.get('/card/:id', getHoaDonByCardIdController);




export default router;
