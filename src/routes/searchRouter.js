import {handleSearch} from "../controllers/searchController.js";
import express from 'express';
const router = express.Router();

// Route xử lý chung cho các model
router.post('/', handleSearch);
export default router;
