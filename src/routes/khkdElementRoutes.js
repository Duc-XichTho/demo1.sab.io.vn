import express from "express";
import { khkdElementController } from "../controllers/khkdElementController.js";

const router = express.Router();

// KHKDElement routes
router.post("/", khkdElementController.create);
router.get("/", khkdElementController.findAll);
router.get("/:id", khkdElementController.findById);
router.get("/khkd/:khkdId", khkdElementController.findByKHKDId);
router.put("/:id", khkdElementController.update);
router.delete("/:id", khkdElementController.delete);

export default router; 