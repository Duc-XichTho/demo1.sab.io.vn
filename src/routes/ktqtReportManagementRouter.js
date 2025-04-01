import express from 'express';
import {
  getReportManagementController,
  getReportManagementListController,
  updateReportManagementController,
  updateReportManagementListController,
  createReportManagementController,
  createReportManagementListController,
  deleteReportManagementController,
} from '../controllers/ktqtReportManagementController.js';

const router = express.Router();

router.get('/list', getReportManagementListController);

router.get('/:id', getReportManagementController);

router.put('/:id', updateReportManagementController);

router.put('/:id/list', updateReportManagementListController);

router.post('/', createReportManagementController);

router.post('/:id/list', createReportManagementListController);
router.delete('/:id', deleteReportManagementController);

export default router;
