import express from "express";
import { ktqtImportHistoryController } from "../controllers/ktqtImportHistoryController.js";

const router = express.Router();

router.post("/", ktqtImportHistoryController.create);
router.get("/", ktqtImportHistoryController.findAll);
router.get("/:id", ktqtImportHistoryController.findById);
router.put("/", ktqtImportHistoryController.update);
router.delete("/:id", ktqtImportHistoryController.delete);
router.post("/hide-by-type", ktqtImportHistoryController.hideAllByImportType);

export default router; 