import express from 'express';
import * as donMuaHangController from '../controllers/donMuaHangController.js';
import {getDonMuaHangByCode2Controller} from "../controllers/donMuaHangController.js";
const router = express.Router();

router.get('/', donMuaHangController.getAllDonMuaHangController);
router.post('/', donMuaHangController.createDonMuaHangController);
router.get('/:code', donMuaHangController.getDonMuaHangByCodeController);
router.get('/code2/:code', donMuaHangController.getDonMuaHangByCode2Controller);
router.put('/:id', donMuaHangController.updateDonMuaHangController);
router.delete('/:id', donMuaHangController.hideDonMuaHangController);

export default router;