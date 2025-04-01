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
    getCountSoKeToanController,
} from '../controllers/ktqtSoKeToanController.js';
const router = express.Router();
router.post('/', createKTQTSoKeToanController);
router.get('/', getAllKTQTSoKeToanController);
router.put('/', updateKTQTSoKeToanController);
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
