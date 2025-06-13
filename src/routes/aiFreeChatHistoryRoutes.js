import express from "express";
import { aiFreeChatHistoryController } from "../controllers/aiFreeChatHistoryController.js";

const router = express.Router();

// AiFreeChatHistory routes
router.post("/", aiFreeChatHistoryController.create);
router.get("/", aiFreeChatHistoryController.findAll);
router.get("/:id", aiFreeChatHistoryController.findById);
router.put("/", aiFreeChatHistoryController.update);
router.delete("/:id", aiFreeChatHistoryController.delete);

export default router; 