import express from "express";
import { aiGenHistoryController } from "../controllers/aiGenHistoryController.js";

const router = express.Router();

// AiGenHistory routes
router.post("/", aiGenHistoryController.create);
router.get("/", aiGenHistoryController.findAll);
router.get("/:id", aiGenHistoryController.findById);
router.put("/", aiGenHistoryController.update);
router.delete("/:id", aiGenHistoryController.delete);

export default router; 