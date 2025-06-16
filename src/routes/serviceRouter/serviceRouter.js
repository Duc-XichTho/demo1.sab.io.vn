import express from 'express';
import {
    askQuestion,
    askQuestionSourceIDDataFile, askQuestionSourceIDDataFileOne, deleteEmbedData,
    embedData
} from "../../controllers/serviceController/serviceController.js";

const router = express.Router();

router.post('/qa/ask', askQuestion);
router.post('/ask-with-sources', askQuestionSourceIDDataFile);
router.post('/ask-with-sources-one', askQuestionSourceIDDataFileOne);
router.post('/embed', embedData);
router.post('/delete-embed', deleteEmbedData);



export default router;
