import express from 'express';
import {askQuestion, embedData} from "../../controllers/serviceController/serviceController.js";

const router = express.Router();

router.post('/qa/ask', askQuestion);
router.post('/embed', embedData);



export default router;
