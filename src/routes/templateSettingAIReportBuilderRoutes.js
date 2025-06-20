import express from "express";
import { templateSettingAIReportBuilderController } from "../controllers/templateSettingAIReportBuilderController.js";

const router = express.Router();

// TemplateSettingAIReportBuilder routes
router.post("/", templateSettingAIReportBuilderController.create);
router.get("/", templateSettingAIReportBuilderController.findAll);
router.get("/:id", templateSettingAIReportBuilderController.findById);
router.put("/", templateSettingAIReportBuilderController.update);
router.delete("/:id", templateSettingAIReportBuilderController.delete);

export default router; 