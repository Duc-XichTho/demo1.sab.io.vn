import express from 'express';
import * as donHangDetailController from '../controllers/donHangDetailController.js';
const router = express.Router();

router.get('/:id', donHangDetailController.getAllDonHangDetailByDonHangIdController);
router.post('/', donHangDetailController.createDonHangDetailController);
router.put('/:id', donHangDetailController.updateDonHangDetailController);
router.delete('/:id', donHangDetailController.hideDonHangDetailController);

export default router;