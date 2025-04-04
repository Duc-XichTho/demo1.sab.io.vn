import express from 'express';

import { getFileNotePadByIdControllerPublic } from '../../controllers/fileNotePadController.js';

const router = express.Router();

router.get('/:id', getFileNotePadByIdControllerPublic);

export default router;