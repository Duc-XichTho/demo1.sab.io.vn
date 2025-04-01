import express from "express";
import {
    sendNotificationEmailController,
    sendChangeStatusTicketEmailController, sendRequestController
} from "../../controllers/gateway/emailController.js";

const router = express.Router();

router.post("/notification", sendNotificationEmailController);
router.post("/request", sendRequestController);
router.post("/change-status", sendChangeStatusTicketEmailController);

export default router; 