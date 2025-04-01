import express from 'express';
import { updateDMFromSABController } from "../controllers/updateDMFromSABController.js";

const router = express.Router();

// Sử dụng phương thức POST thay vì GET nếu bạn đang thực hiện cập nhật
router.post('/', updateDMFromSABController);

export default router;
