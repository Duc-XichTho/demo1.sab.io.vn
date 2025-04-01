import express from 'express';
import { getAllTaiKhoanController } from "../../controllers/taiKhoanController.js";

const router = express.Router();

router.get('/', getAllTaiKhoanController);

export default router;
