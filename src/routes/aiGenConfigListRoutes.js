import express from "express";
import { aiGenConfigListController } from "../controllers/aiGenConfigListController.js";

const router = express.Router();

// AiGenConfigList routes
router.post("/", aiGenConfigListController.create);
router.get("/", aiGenConfigListController.findAll);
router.get("/:id", aiGenConfigListController.findById);
router.put("/", aiGenConfigListController.update);
router.delete("/:id", aiGenConfigListController.delete);

export default router; 