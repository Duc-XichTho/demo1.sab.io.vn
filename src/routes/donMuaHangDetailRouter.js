import express from 'express';
import * as donMuaHangDetailController from '../controllers/donMuaHangDetailController.js';
const router = express.Router();

router.get('/:id', donMuaHangDetailController.getAllDonMuaHangDetailByDonMuaHangIdController);
router.post('/', donMuaHangDetailController.createDonMuaHangDetailController);
router.put('/:id', donMuaHangDetailController.updateDonMuaHangDetailController);
router.delete('/:id', donMuaHangDetailController.hideDonMuaHangDetailController);

export default router;