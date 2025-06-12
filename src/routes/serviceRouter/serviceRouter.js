import express from 'express';
import {
    askQuestion,
    askQuestionSourceIDDataFile,
    embedData
} from "../../controllers/serviceController/serviceController.js";

const router = express.Router();

router.post('/qa/ask', askQuestion);
router.post('/ask-with-sources', askQuestionSourceIDDataFile);
router.post('/embed', embedData);



export default router;
