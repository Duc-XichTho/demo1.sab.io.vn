import express from 'express';
import * as tamUngDetailController from '../controllers/tamUngDetailController.js';
const router = express.Router();

router.get('/:id', tamUngDetailController.getAllTamUngDetailByTamUngIdController);
router.post('/', tamUngDetailController.createTamUngDetailController);
router.put('/:id', tamUngDetailController.updateTamUngDetailController);
router.delete('/:id', tamUngDetailController.deleteTamUngDetailController);

export default router;