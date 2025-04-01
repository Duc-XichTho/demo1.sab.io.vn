import express from 'express';

import {
    getConversationByEmailController,
    updateConversationController,
} from '../controllers/conversationController.js';

const router = express.Router();

router.get('/:email', getConversationByEmailController);

router.put('/', updateConversationController);

export default router;