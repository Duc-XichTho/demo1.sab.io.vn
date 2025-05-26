import express from "express";
import { ktqtMappingController } from "../controllers/ktqtMappingController.js";

const router = express.Router();

// KtqtMapping routes
router.post("/", ktqtMappingController.create);
router.get("/", ktqtMappingController.findAll);
router.get("/:id", ktqtMappingController.findById);
router.put("/:id", ktqtMappingController.update);
router.delete("/:id", ktqtMappingController.delete);

export default router; 