import express from 'express';
import {
    createKTQTSoKeToanController,
    getAllKTQTSoKeToanController,
    updateKTQTSoKeToanController,
    deleteKTQTSoKeToanServiceController,
    deleteAllKTQTSoKeToanController,
    deleteKTQTSoKeToanByMonthController,
    getLastUpdateKTQTSoKeToanController,
    getLastIdKTQTSoKeToanController,
    deleteByDaDung1Controller,
    deleteKTQTSoKeToanByYearController,
    getUpdatedKTQTSoKeToanController,
    getCountSoKeToanController, createBulkKTQTSoKeToanController,
    updateBulkKTQTSoKeToanController,
    deleteBulkKTQTSoKeToanController,
} from '../controllers/ktqtSoKeToanController.js';
const router = express.Router();
router.post('/', createKTQTSoKeToanController);
router.post('/create-bulk', createBulkKTQTSoKeToanController);
router.get('/', getAllKTQTSoKeToanController);
router.put('/', updateKTQTSoKeToanController);
router.put('/update-bulk', updateBulkKTQTSoKeToanController);
router.delete('/delete-bulk', deleteBulkKTQTSoKeToanController);
router.delete('/all/', deleteAllKTQTSoKeToanController);
router.delete('/month/:month/year/:year/company/:company', deleteKTQTSoKeToanByMonthController);
router.delete('/year/:year/company/:company', deleteKTQTSoKeToanByYearController);
router.delete('/:id', deleteKTQTSoKeToanServiceController);
router.get('/last-update', getLastUpdateKTQTSoKeToanController);
router.get('/last-id', getLastIdKTQTSoKeToanController);
router.delete('/deleteByDaDung1/:da_dung_1', deleteByDaDung1Controller);
router.get('/updated-since/:lastUpdated', getUpdatedKTQTSoKeToanController);
router.get('/count', getCountSoKeToanController);



export default router;
