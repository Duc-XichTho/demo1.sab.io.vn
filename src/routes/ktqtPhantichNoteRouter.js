import express from 'express';
import * as ktqtPhanTichNoteController from '../controllers/ktqtPhantichNoteController.js';

const router = express.Router();

router.get('/', ktqtPhanTichNoteController.getAllKTQTPhanTichNoteController);
router.post('/', ktqtPhanTichNoteController.createKTQTPhanTichNoteController);
router.put('/:id', ktqtPhanTichNoteController.updateKTQTPhanTichNoteController);
router.delete('/:id', ktqtPhanTichNoteController.deleteKTQTPhanTichNoteController);

export default router;