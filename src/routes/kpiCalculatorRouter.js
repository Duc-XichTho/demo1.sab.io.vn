import express from "express";
import {
  createKpiCalculator,
  getAllKpiCalculator,
  getKpiCalculatorById,
  updateKpiCalculator,
  deleteKpiCalculator,
} from "../controllers/kpiCalculatorController.js";

const router = express.Router();

router.get("/", getAllKpiCalculator);
router.get("/:id", getKpiCalculatorById);
router.post("/", createKpiCalculator);
router.put("/", updateKpiCalculator);
router.delete("/:id", deleteKpiCalculator);

export default router;
