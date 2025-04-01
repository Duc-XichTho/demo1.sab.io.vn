import express from "express";
import {
  getAllLenhSanXuatController,
  getLenhSanXuatByIdController,
  getAllLenhSanXuatNLByLSXIdController,
  getAllLenhSanXuatSPByLSXIdController,
  createLenhSanXuatController,
  createLenhSanXuatNLController,
  createLenhSanXuatSPController,
  updateLenhSanXuatController,
  updateLenhSanXuatNLController,
  updateLenhSanXuatSPController,
  deleteLenhSanXuatController,
  deleteLenhSanXuatNLController,
  deleteLenhSanXuatSPController,
} from "../controllers/lenhSanXuatController.js";

const router = express.Router();

// GET
router.get("/", getAllLenhSanXuatController);

router.get("/:id", getLenhSanXuatByIdController);

router.get("/nl/:id", getAllLenhSanXuatNLByLSXIdController);

router.get("/sp/:id", getAllLenhSanXuatSPByLSXIdController);

// CREATE
router.post("/", createLenhSanXuatController);

router.post("/nl", createLenhSanXuatNLController);

router.post("/sp", createLenhSanXuatSPController);

// UPDATE
router.put("/", updateLenhSanXuatController);

router.put("/nl", updateLenhSanXuatNLController);

router.put("/sp", updateLenhSanXuatSPController);

// DELETE
router.delete("/:id", deleteLenhSanXuatController);

router.delete("/nl/:id", deleteLenhSanXuatNLController);

router.delete("/sp/:id", deleteLenhSanXuatSPController);

export default router;
