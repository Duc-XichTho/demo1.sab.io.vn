import express from 'express';
import {handleCallback, handleSpeak} from "../controllers/audioPlayController.js";

const router = express.Router();

router.post('/speak', handleSpeak);
router.post('/callback', handleCallback);

export default router;
