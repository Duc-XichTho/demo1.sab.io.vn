import express from 'express';
import {
    createRuleSettingController, deleteRuleSettingController,
    getAllRuleSettingController,
    getRuleSettingByIdController, updateRuleSettingController
} from "../controllers/ruleSettingController.js";

const router = express.Router();

router.post('/', createRuleSettingController);

router.get('/', getAllRuleSettingController);

router.put('/', updateRuleSettingController);

router.delete('/:id', deleteRuleSettingController);

router.get('/:id', getRuleSettingByIdController);

export default router;
