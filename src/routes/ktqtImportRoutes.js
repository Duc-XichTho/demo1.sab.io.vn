import express from "express";
import { ktqtImportController } from "../controllers/ktqtImportController.js";

const router = express.Router();

// KtqtImport routes
router.post("/", ktqtImportController.create);
router.get("/", ktqtImportController.findAll);
router.get("/:id", ktqtImportController.findById);
router.put("/", ktqtImportController.update);
router.delete("/:id", ktqtImportController.delete);

export default router; 