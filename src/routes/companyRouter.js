import express from 'express';
import {
    createCompanyController, deleteCompanyController,
    getAllCompanyController,
    getCompanyByIdController, updateCompanyController
} from "../controllers/companyController.js";

const router = express.Router();

router.post('/', createCompanyController);

router.get('/', getAllCompanyController);

router.put('/', updateCompanyController);

router.delete('/:id', deleteCompanyController);

router.get('/:id', getCompanyByIdController);

export default router;
