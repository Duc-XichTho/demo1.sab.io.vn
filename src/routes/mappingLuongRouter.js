import express from "express";
import {
  createMappingLuongController,
  deleteMappingLuongController,
  getAllMappingLuongController,
  updateMappingLuongController
} from "../controllers/mappingLuongController.js";

const router = express.Router();

router.post('/', createMappingLuongController);

router.get('/', getAllMappingLuongController);

router.put('/', updateMappingLuongController);

router.delete('/:id', deleteMappingLuongController);

export default router;
