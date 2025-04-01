import express from 'express';

import * as CFConfigController from '../controllers/CFConfig.controller.js';

const router = express.Router();

router.get('/', CFConfigController.getAllCFConfigController);
router.get('/plan/:planId', CFConfigController.getCFConfigByPlanIdController);
router.get('/:id', CFConfigController.getCFConfigByIdController);
router.post('/', CFConfigController.createCFConfigController);
router.put('/:id', CFConfigController.updateCFConfigController);
router.delete('/:id', CFConfigController.deleteCFConfigController);

export default router;