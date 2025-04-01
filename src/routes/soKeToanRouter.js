import express from 'express';
import {
    createSoKeToanController,
    getAllSoKeToanController,
    updateSoKeToanController,
    deleteSoKeToanServiceController,
    deleteAllSoKeToanController,
    deleteSoKeToanByMonthController,
    getLastUpdateSoKeToanController,
    getLastIdSoKeToanController,
    deleteByDaDung1Controller,
} from '../controllers/soKeToanController.js';

const router = express.Router();

router.post('/', createSoKeToanController);

router.get('/', getAllSoKeToanController);

router.put('/', updateSoKeToanController);

router.delete('/all/:company', deleteAllSoKeToanController);

router.delete('/month/:month/:company', deleteSoKeToanByMonthController);

router.delete('/:id', deleteSoKeToanServiceController);
router.get('/last-update', getLastUpdateSoKeToanController);
router.get('/last-id', getLastIdSoKeToanController);
router.delete('/deleteByDaDung1/:da_dung_1', deleteByDaDung1Controller);



export default router;
