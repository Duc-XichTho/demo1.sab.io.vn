import express from "express";
import { khkdController } from "../controllers/khkdController.js";

const router = express.Router();

// KHKD routes
router.post("/", khkdController.create);
router.get("/", khkdController.findAll);
router.get("/:id", khkdController.findById);
router.put("/:id", khkdController.update);
router.delete("/:id", khkdController.delete);

export default router; 