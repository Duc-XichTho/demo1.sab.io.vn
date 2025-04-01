import express from 'express';
import * as donHangController from '../controllers/donHangController.js';
import {getDonHangByCode2Controller} from "../controllers/donHangController.js";
const router = express.Router();

router.get('/', donHangController.getAllDonHangController);
router.post('/', donHangController.createDonHangController);
router.get('/:code', donHangController.getDonHangByCodeController);
router.get('/code2/:code', donHangController.getDonHangByCode2Controller);
router.get('/id/:id', donHangController.getDonHangByIdController);
router.put('/:id', donHangController.updateDonHangController);
router.delete('/:id', donHangController.hideDonHangController);

export default router;