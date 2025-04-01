import express from "express";
import {
    createKpi2Calculator,
    getAllKpi2Calculator,
    getKpi2CalculatorById,
    updateKpi2Calculator,
    deleteKpi2Calculator,
} from "../controllers/kpi2CalculatorController.js";

const router = express.Router();

router.get("/", getAllKpi2Calculator);
router.get("/:id", getKpi2CalculatorById);
router.post("/", createKpi2Calculator);
router.put("/", updateKpi2Calculator);
router.delete("/:id", deleteKpi2Calculator);

export default router; 