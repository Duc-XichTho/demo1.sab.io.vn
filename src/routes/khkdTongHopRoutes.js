import express from "express";
import { khkdTongHopController } from "../controllers/khkdTongHopController.js";

const router = express.Router();

// KHKDTongHop routes
router.post("/", khkdTongHopController.create);
router.get("/", khkdTongHopController.findAll);
router.get("/:id", khkdTongHopController.findById);
router.put("/:id", khkdTongHopController.update);
router.delete("/:id", khkdTongHopController.delete);

export default router; 