import express from 'express';
import {
    createPMVSettingKHController, deletePMVSettingKHController,
    getAllPMVSettingKHController,
    getPMVSettingKHByIdController, updatePMVSettingKHController
} from "../controllers/pmvSettingKHController.js";

const router = express.Router();

router.post('/', createPMVSettingKHController);

router.get('/', getAllPMVSettingKHController);

router.put('/', updatePMVSettingKHController);

router.delete('/:id', deletePMVSettingKHController);

router.get('/:id', getPMVSettingKHByIdController);

export default router;
