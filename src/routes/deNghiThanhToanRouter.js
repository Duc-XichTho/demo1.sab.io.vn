import express from 'express';
import * as deNghiThanhToanController from '../controllers/deNghiThanhToanController.js';
import {
    getAllDeNghiThanhToanByTamUngIdController,
    getDeNghiThanhToanNewController
} from "../controllers/deNghiThanhToanController.js";
const router = express.Router();

router.get('/', deNghiThanhToanController.getAllDeNghiThanhToanController);
router.post('/', deNghiThanhToanController.createDeNghiThanhToanController);
router.put('/', deNghiThanhToanController.updateDeNghiThanhToanController);
router.delete('/:id', deNghiThanhToanController.hideDeNghiThanhToanController);
router.get('/card/:cardId', deNghiThanhToanController.getDeNghiThanhToanByCardIdServiceController);
router.get('/tam-ung/:id', deNghiThanhToanController.getAllDeNghiThanhToanByTamUngIdController);
router.get('/new', deNghiThanhToanController.getDeNghiThanhToanNewController);

export default router;
