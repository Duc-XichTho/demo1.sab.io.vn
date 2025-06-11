import express from "express";
import { aiChatHistoryController } from "../controllers/aiChatHistoryController.js";

const router = express.Router();

// AiChatHistory routes
router.post("/", aiChatHistoryController.create);
router.get("/", aiChatHistoryController.findAll);
router.get("/:id", aiChatHistoryController.findById);
router.put("/", aiChatHistoryController.update);
router.delete("/:id", aiChatHistoryController.delete);

export default router; 