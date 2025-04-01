import express from "express";
import {
  getAllAuditLogController,
  getCountAuditLogByTableNameController,
} from "../controllers/auditLogController.js";

const router = express.Router();

router.get("/", getAllAuditLogController);

router.get("/:tableName", getCountAuditLogByTableNameController);

export default router;
