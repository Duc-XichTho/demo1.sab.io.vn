import express from "express";
import {
  getAllMessagesController,
  getMessagesByTicketIdController,
  getMessagesBeforeIdController,
  createMessageController,
  updateMessageController,
  deleteMessageController,
} from "../../controllers/gateway/messageController.js";

const router = express.Router();

router.get("/", getAllMessagesController);

router.get("/ticket/:ticketId", getMessagesByTicketIdController);

router.get(
  "/ticket/:ticketId/before/:messageId",
  getMessagesBeforeIdController
);

router.put("/", updateMessageController);

router.post("/", createMessageController);

router.delete("/:id", deleteMessageController);

export default router;
