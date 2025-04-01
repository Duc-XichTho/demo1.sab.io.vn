import express from 'express';
import * as tamUngController from '../controllers/tamUngController.js';
const router = express.Router();

router.get('/', tamUngController.getAllTamUngController);
router.post('/', tamUngController.createTamUngController);
router.put('/', tamUngController.updateTamUngController);
router.delete('/:id', tamUngController.hideTamUngController);
router.get('/card/:cardId', tamUngController.getTamUngByCardIdServiceController);

export default router;
