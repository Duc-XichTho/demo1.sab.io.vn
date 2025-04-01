import express from 'express';
import {getAllWarningController} from "../controllers/smartWarningSABController.js";


const router = express.Router();

router.get('/', getAllWarningController);

export default router;
