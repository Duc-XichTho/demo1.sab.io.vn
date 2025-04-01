import express from 'express';
import {
    createSettingGroupController, deleteSettingGroupController,
    getAllSettingGroupController,
    getSettingGroupByIdController, updateSettingGroupController
} from "../controllers/settingGroupController.js";

const router = express.Router();

router.post('/', createSettingGroupController);

router.get('/', getAllSettingGroupController);

router.put('/', updateSettingGroupController);

router.delete('/:id', deleteSettingGroupController);

router.get('/:id', getSettingGroupByIdController);

export default router;
