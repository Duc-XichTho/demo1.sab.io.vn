import express from 'express';
import * as deNghiThanhToanDetailController from '../controllers/deNghiThanhToanDetailController.js';
const router = express.Router();

router.get('/:id', deNghiThanhToanDetailController.getAllDeNghiThanhToanDetailByDeNghiThanhToanIdController);
router.get('/dntt/:id', deNghiThanhToanDetailController.getDeNghiThanhToanDetailByDeNghiThanhToanIdController);
router.post('/', deNghiThanhToanDetailController.createDeNghiThanhToanDetailController);
router.put('/:id', deNghiThanhToanDetailController.updateDeNghiThanhToanDetailController);
router.delete('/:id', deNghiThanhToanDetailController.deleteDeNghiThanhToanDetailController);

export default router;