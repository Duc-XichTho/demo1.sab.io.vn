import {
  createTemplateColumn,
  createTemplateTableService,
  deleteTemplateColumn,
  getAllSheetTable,
  getAllTemplateTables,
  getAllTemplateTablesPlan,
  getTableById,
  getTemplateColumn,
  getTemplateTableByDevIdService,
  getTemplateTableByNoteIdService,
  getTemplateTableByPlanIdService,
  getValidationData,
  updateColumnFormulaOption,
  updateColumnIndexes,
  updateColumnSelectOption,
  updateColumnTemplateOption,
  updateTemplateColumn,
  updateTemplateColumnWidth,
  updateTemplateTable
} from "../services/templateSettingService.js";
import * as TemplateDataService from '../services/TemplateData.service.js';
import {deleteTemplateDataByIdsService} from "../services/TemplateData.service.js";

// GET
export const getAllTemplateTablesController = async (req, res) => {
  try {
    const data = await getAllTemplateTables();
    res.status(200).json(data);
  } catch (e) {
    res.status(404).json({
      message: "Bản ghi template setting không tồn tại: " + e.message,
    });
  }
};

export const getAllTemplateTablesPlanController = async (req, res) => {
  try {
    const data = await getAllTemplateTablesPlan();
    res.status(200).json(data);
  } catch (e) {
    res.status(404).json({
      message: "Bản ghi template setting không tồn tại: " + e.message,
    });
  }
};


export const createTemplateTableController = async (req, res) => {
  const data = req.body;
  try {
    const team = await createTemplateTableService(data);
    res.status(201).json(team);
  } catch (error) {
    res.status(500).json({ message: 'Lỗi khi tạo bản ghi Card: ' + error.message });
  }
};

export const getTemplateTableByFileNoteId = async (req, res) => {
  try {
    const data = await getTemplateTableByNoteIdService(req.params.fileNote_id);
    res.status(200).json(data);
  } catch (error) {
    res.status(404).json({
      message: "Bản ghi template by note id không tồn tại: " + error.message,
    })
  }
};

export const getTemplateTableByPlanIdController = async (req, res) => {
  try {
    const data = await getTemplateTableByPlanIdService(req.params.planId);
    res.status(200).json(data);
  } catch (error) {
    res.status(404).json({
      message: "Bản ghi template by planId setting không tồn tại: " + error.message,
    })
  }
}

export const getTemplateTableByDevIdController = async (req, res) => {
  try {
    const data = await getTemplateTableByDevIdService(req.params.planId);
    res.status(200).json(data);
  } catch (error) {
    res.status(404).json({
      message: "Bản ghi template by planId setting không tồn tại: " + error.message,
    })
  }
}

export const getAllTemplateSheetTable = async (req, res) => {
  try {
    const data = await getAllSheetTable();
    res.status(200).json(data);
  } catch (e) {
    res.status(404).json({
      message: "Bản ghi template setting không tồn tại: " + e.message,
    });
  }
};

export const getTableByIdController = async (req, res) => {
  try {
    let { id } = req.params;
    const data = await getTableById(id);
    res.status(200).json(data);
  } catch (e) {
    res
      .status(404)
      .json({ message: "Bản ghi sheet setting không tồn tại: " + e.message });
  }
};

export const getTemplateColumnController = async (req, res) => {
  try {
    let { id } = req.params;
    const data = await getTemplateColumn(id);
    res.status(200).json(data);
  } catch (e) {
    res
      .status(404)
      .json({ message: "Bản ghi sheet setting không tồn tại: " + e.message });
  }
};

export const getTemplateRowController = async (req, res) => {
  try {
    let { tableId } = req.params;
    const data = await TemplateDataService.getTemplateDataByTableIdService(tableId);
    // const data = await getTemplateRow(tableId);
    res.status(200).json(data);
  } catch (e) {
    res
      .status(404)
      .json({ message: "Bản ghi sheet data không tồn tại: " + e.message });
  }
};

export const getTemplateRowByIdController = async (req, res) => {
  try {
    let { id } = req.params;
    const data = await TemplateDataService.getTemplateDataByIdService(id);
    // const data = await getTemplateRowById(id);
    res.status(200).json(data);
  } catch (e) {
    res
      .status(404)
      .json({ message: "Bản ghi sheet data không tồn tại: " + e.message });
  }
};

export const getValidationDataController = async (req, res) => {
  try {
    let { id, columnId } = req.params;
    const data = await getValidationData(id, columnId);
    res.status(200).json(data);
  } catch (e) {
    res
      .status(404)
      .json({ message: "Bản ghi sheet data không tồn tại: " + e.message });
  }
};

// CREATE
export const createTemplateColumnController = async (req, res) => {
  try {
    const data = await createTemplateColumn(req.body);
    res.status(200).json(data);
  } catch (e) {
    res.status(404).json({
      message:
        "Lỗi khi tạo dòng cho bản ghi sheet setting không tồn tại: " +
        e.message,
    });
  }
};

export const createTemplateRowController = async (req, res) => {
  try {
    let { tableId, data , id_DataOriginal } = req.body;
    const result = await TemplateDataService.createTemplateDataService(tableId, data , id_DataOriginal);
    res.status(200).json(result);
  } catch (e) {
    res.status(404).json({
      message:
        "Lỗi khi tạo dòng cho bản ghi sheet setting không tồn tại: " +
        e.message,
    });
  }
};

export const createBatchTemplateDataController = async (req, res) => {
  try {
    let { tableId, data, id_DataOriginal } = req.body;
    const result = await TemplateDataService.createBatchTemplateDataService(tableId, data, id_DataOriginal);
    res.status(200).json(result);
  } catch (e) {
    res.status(404).json({ message: "Lỗi createBacthTemplateDataController" + e.message, });
  }
}

// UPDATE
export const updateTemplateTableController = async (req, res) => {
  try {
    let data = req.body;
    const result = await updateTemplateTable(data);
    res.status(200).json(result);
  } catch (e) {
    res.status(404).json({
      message:
        "Lỗi khi tạo dòng cho bản ghi sheet column không tồn tại: " + e.message,
    });
  }
};

export const updateTemplateColumnController = async (req, res) => {
  try {
    let data = req.body;
    const result = await updateTemplateColumn(data);
    res.status(200).json(result);
  } catch (e) {
    res.status(404).json({
      message:
        "Lỗi khi tạo dòng cho bản ghi sheet column không tồn tại: " + e.message,
    });
  }
};

export const updateTemplateColumnWidthController = async (req, res) => {
  try {
    let { id, width } = req.body;
    const result = await updateTemplateColumnWidth(id, width);
    res.status(200).json(result);
  } catch (e) {
    res.status(404).json({
      message:
        "Lỗi khi tạo dòng cho bản ghi sheet column không tồn tại: " + e.message,
    });
  }
};

export const updateColumnIndexesController = async (req, res) => {
  try {
    const result = await updateColumnIndexes(req.body);
    res.status(200).json(result);
  } catch (e) {
    res.status(404).json({
      message:
        "Lỗi khi tạo dòng cho bản ghi sheet column không tồn tại: " + e.message,
    });
  }
};

export const updateTemplateRowController = async (req, res) => {
  try {
    let { id, data } = req.body;
    const result = await TemplateDataService.updateTemplateDataService(id, data);
    res.status(200).json(result);
  } catch (e) {
    res.status(404).json({
      message:
        "Lỗi khi tạo dòng cho bản ghi sheet row không tồn tại: " + e.message,
    });
  }
};

export const updateBatchTemplateRowController = async (req, res) => {
 try {
    let { tableId, data } = req.body;
    const result = await TemplateDataService.updateBatchTemplateDataService(tableId, data);
    res.status(200).json(result);
 } catch (error) {
    res.status(404).json({
      message:
        "Lỗi updateBatchTemplateRowController " + error.message,
    })
 }
}

export const updateColumnSelectOptionController = async (req, res) => {
  try {
    let { id, selectOptions } = req.body;
    const result = await updateColumnSelectOption(id, selectOptions);
    res.status(200).json(result);
  } catch (e) {
    res.status(404).json({
      message:
        "Lỗi khi tạo dòng cho bản ghi sheet row không tồn tại: " + e.message,
    });
  }
};

export const updateColumnTemplateOptionController = async (req, res) => {
  try {
    let { id, sheetOptions } = req.body;
    const result = await updateColumnTemplateOption(id, sheetOptions);
    res.status(200).json(result);
  } catch (e) {
    res.status(404).json({
      message:
        "Lỗi khi tạo dòng cho bản ghi sheet row không tồn tại: " + e.message,
    });
  }
};

export const updateColumnFormulaOptionController = async (req, res) => {
  try {
    let { id, formulaOptions } = req.body;
    const result = await updateColumnFormulaOption(id, formulaOptions);
    res.status(200).json(result);
  } catch (e) {
    res.status(404).json({
      message:
        "Lỗi khi tạo dòng cho bản ghi sheet row không tồn tại: " + e.message,
    });
  }
};

// DELETE
export const deleteTemplateRowController = async (req, res) => {
  try {
    let id = req.params.id;
    const result = await TemplateDataService.deleteTemplateDataByIdService(id);
    res.status(200).json(result);
  } catch (e) {
    res.status(404).json({
      message:
        "Lỗi khi tạo dòng cho bản ghi sheet row không tồn tại: " + e.message,
    });
  }
};

export const deleteTemplateRowsController = async (req, res) => {
  try {
    const ids = req.body.ids;
    const result = await TemplateDataService.deleteTemplateDataByIdsService(ids);
    res.status(200).json(result);
  } catch (e) {
    res.status(404).json({
      message:
        "Lỗi khi tạo dòng cho bản ghi sheet rows không tồn tại: " + e.message,
    });
  }
};

export const deleteTemplateRowByTableIdController = async (req, res) => {
  try {
    let tableId = req.params.tableId;
    const result = await TemplateDataService.deleteTemplateRowByTableIdService(tableId);
    res.status(200).json(result);
  } catch (e) {
    res.status(404).json({
      message:
        "Lỗi khi tạo dòng cho bản ghi sheet row không tồn tại: " + e.message,
    });
  }
};

export const deleteTemplateColByTableIdController = async (req, res) => {
  try {
    let tableId = req.params.tableId;
    const result = await TemplateDataService.deleteTemplateColByTableIdService(tableId);
    res.status(200).json(result);
  } catch (e) {
    res.status(404).json({
      message:
        "Lỗi khi tạo dòng cho bản ghi column không tồn tại: " + e.message,
    });
  }
};

export const deleteTemplateColumnController = async (req, res) => {
  try {
    const result = await deleteTemplateColumn(req.body);
    res.status(200).json(result);
  } catch (e) {
    res.status(404).json({
      message:
        "Lỗi khi tạo dòng cho bản ghi sheet row không tồn tại: " + e.message,
    });
  }
};
