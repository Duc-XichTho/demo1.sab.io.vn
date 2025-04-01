import { Router } from "express";
import {
  createKTQTProjectController, getKTQTProjectController,
  hideKTQTProjectController,
  updateKTQTProjectController
} from "../controllers/ktqtProjectController.js";

const router = Router();
router.get("/", getKTQTProjectController);
router.post("/", createKTQTProjectController);
router.delete("/:id", hideKTQTProjectController);
router.put("/:id", updateKTQTProjectController);
export default router;
