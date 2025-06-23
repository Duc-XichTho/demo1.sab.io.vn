import express from "express";
import { aiQuestionTemplateController } from "../controllers/aiQuestionTemplateController.js";

const router = express.Router();

// AiQuestionTemplate routes
router.post("/", aiQuestionTemplateController.create);
router.get("/", aiQuestionTemplateController.findAll);
router.get("/:id", aiQuestionTemplateController.findById);
router.put("/", aiQuestionTemplateController.update);
router.delete("/:id", aiQuestionTemplateController.delete);

export default router; 