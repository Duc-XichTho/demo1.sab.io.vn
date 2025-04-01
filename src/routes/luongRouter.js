import express from "express";
import {
  createLuongController,
  deleteLuongController,
  getAllLuongController,
  updateLuongController
} from "../controllers/luongController.js";

const router = express.Router();

router.post('/', createLuongController);

router.get('/', getAllLuongController);

router.put('/', updateLuongController);

router.delete('/:id', deleteLuongController);

export default router;
