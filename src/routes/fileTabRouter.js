import express from "express";
import {
  getAllFileTabController,
  createFileTabController,
  updateFileTabController,
  deleteFileTabController, getFileTabByTypeController, getAllFileTabTypeDataController,
} from "../controllers/fileTabController.js";

const router = express.Router();

router.get("/", getAllFileTabController);
router.get("/by-type", getFileTabByTypeController);
router.get("/all-type-data", getAllFileTabTypeDataController);

router.post("/", createFileTabController);

router.put("/", updateFileTabController);

router.delete("/:id", deleteFileTabController);

export default router;
