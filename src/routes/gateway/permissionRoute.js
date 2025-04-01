import express from "express";
import {
    getAllPermissionsController,
    getPermissionByUserAndCompanyController,
    getPermissionsByCompanyIdController,
    getPermissionsByUserEmailController,
    updatePermissionController,
    createPermissionController,
    deletePermissionController,
} from "../../controllers/gateway/permissionController.js";

const router = express.Router();

router.get("/", getAllPermissionsController);

router.get("/user/:userEmail/company/:companyId", getPermissionByUserAndCompanyController);

router.get("/company/:companyId", getPermissionsByCompanyIdController);

router.get("/user/:userEmail", getPermissionsByUserEmailController);

router.put("/", updatePermissionController);

router.post("/", createPermissionController);

router.delete("/:id", deletePermissionController);

export default router; 