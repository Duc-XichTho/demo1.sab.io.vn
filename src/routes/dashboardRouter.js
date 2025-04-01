import express from "express";
import {
  getAllDashBoardController,
  createDashBoardController,
  updateDashBoardController,
  deleteDashBoardController,
} from "../controllers/dashboardController.js";

const router = express.Router();

router.get("/", getAllDashBoardController);

router.post("/", createDashBoardController);

router.put("/", updateDashBoardController);

router.delete("/:id", deleteDashBoardController);

export default router;
