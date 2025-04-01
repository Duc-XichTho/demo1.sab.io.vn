import express from 'express';
import {
    getSettingByTypeController,
    createSettingController,
    updateSettingController,
} from "../controllers/settingController.js";

const router = express.Router();

router.get('/:type', getSettingByTypeController);

router.post('/', createSettingController);

router.put('/', updateSettingController);

export default router;