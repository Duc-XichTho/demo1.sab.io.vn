import express from "express";
import {
    getAllNotificationsController,
    getNotificationsByUserController,
    getNotificationsByTicketIdController,
    updateNotificationController,
    markAsReadController,
    createNotificationController,
    deleteNotificationController,
} from "../../controllers/gateway/notificationController.js";

const router = express.Router();

router.get("/", getAllNotificationsController);

router.get("/user/:userNoti", getNotificationsByUserController);

router.get("/ticket/:ticketId", getNotificationsByTicketIdController);

router.put("/", updateNotificationController);

router.put("/read/:id", markAsReadController);

router.post("/", createNotificationController);

router.delete("/:id", deleteNotificationController);

export default router; 