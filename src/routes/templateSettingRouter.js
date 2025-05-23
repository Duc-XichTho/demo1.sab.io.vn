import express from "express";
import {
  getAllTemplateTablesController,
  createTemplateColumnController,
  createTemplateRowController,
  deleteTemplateColumnController,
  deleteTemplateRowController,
  getAllTemplateSheetTable,
  getTableByIdController,
  getTemplateColumnController,
  getTemplateRowController,
  getTemplateTableByFileNoteId,
  getValidationDataController,
  updateColumnFormulaOptionController,
  updateColumnIndexesController,
  updateColumnSelectOptionController,
  updateColumnTemplateOptionController,
  updateTemplateColumnController,
  updateTemplateColumnWidthController,
  updateTemplateRowController,
  updateTemplateTableController,
  deleteTemplateRowByTableIdController,
  getTemplateTableByPlanIdController,
  createTemplateTableController,
  getAllTemplateTablesPlanController,
  getTemplateTableByDevIdController,
  getTemplateRowByIdController,
  createBatchTemplateDataController,
  updateBatchTemplateRowController, deleteTemplateColByTableIdController, deleteTemplateRowsController
} from "../controllers/templateSettingController.js";

const router = express.Router();

// GET
router.get("/get-all-template", getAllTemplateTablesController);
router.get("/get-all-tables-plan", getAllTemplateTablesPlanController);

router.get("/fileNote/:fileNote_id", getTemplateTableByFileNoteId);

router.get("/plan/:planId", getTemplateTableByPlanIdController);
router.get("/deployment/:planId", getTemplateTableByDevIdController);

router.get("/get-column/:id", getTemplateColumnController);

router.get("/get-row/:tableId", getTemplateRowController);
router.get("/get-row-by-id/:id", getTemplateRowByIdController);

router.get("/get-valid/:id/:columnId", getValidationDataController);

router.get("", getAllTemplateSheetTable);

router.get("/:id", getTableByIdController);

// CREATE
router.post("/create-table", createTemplateTableController);
router.post("/create-column", createTemplateColumnController);

router.post("/create-row", createTemplateRowController);
router.post("/create-batch-row", createBatchTemplateDataController);

// UPDATE
router.put("/update-table", updateTemplateTableController);

router.put("/update-column", updateTemplateColumnController);

router.put("/update-column-width", updateTemplateColumnWidthController);

router.put("/update-column-indexes", updateColumnIndexesController);

router.put("/update-row", updateTemplateRowController);

router.put("/update-batch-row", updateBatchTemplateRowController);

router.put("/update-select-option", updateColumnSelectOptionController);

router.put(
  "/update-template-column-option",
  updateColumnTemplateOptionController
);

router.put(
  "/update-template-formula-option",
  updateColumnFormulaOptionController
);

// DELETE
router.delete("/delete-row/:id", deleteTemplateRowController);
router.delete(
  "/delete-all-row-by-table/:tableId",
  deleteTemplateRowByTableIdController
);
router.delete("/delete-column-by-table/:tableId", deleteTemplateColByTableIdController);
router.delete("/delete-rows", deleteTemplateRowsController);

router.put("/delete-column", deleteTemplateColumnController);

export default router;
