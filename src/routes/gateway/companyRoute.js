import express from "express";
import {
  getAllCompaniesController,
  createCompanyController,
  updateCompanyController,
  deleteCompanyController,
} from "../../controllers/gateway/companyController.js";

const router = express.Router();

router.get("/", getAllCompaniesController);

router.put("/", updateCompanyController);

router.post("/", createCompanyController);

router.delete("/:id", deleteCompanyController);

export default router;
