import express from "express";
import {
  getAllFileTabController,
  createFileTabController,
  updateFileTabController,
  deleteFileTabController,
} from "../controllers/fileTabController.js";

const router = express.Router();

router.get("/", getAllFileTabController);

router.post("/", createFileTabController);

router.put("/", updateFileTabController);

router.delete("/:id", deleteFileTabController);

export default router;
