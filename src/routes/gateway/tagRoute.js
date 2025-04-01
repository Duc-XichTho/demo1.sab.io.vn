import express from "express";
import {
  getAllTagsController,
  createTagController,
  updateTagController,
  deleteTagController,
} from "../../controllers/gateway/tagController.js";

const router = express.Router();

router.get("/", getAllTagsController);

router.put("/", updateTagController);

router.post("/", createTagController);

router.delete("/:id", deleteTagController);

export default router;
