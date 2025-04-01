import {
  getAllAuditLogService,
  getCountAuditLogByTableName,
} from "../services/auditLogService.js";

// GET
export const getAllAuditLogController = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 50;
    const dataList = await getAllAuditLogService(page, limit);
    res.status(200).json(dataList);
  } catch (e) {
    res.status(404).json({
      message: "Lỗi khi lấy danh sách bản ghi AuditLog: " + e.message,
    });
  }
};

export const getCountAuditLogByTableNameController = async (req, res) => {
  try {
    const count = await getCountAuditLogByTableName(req.params.tableName);
    res.status(200).json(count);
  } catch (error) {
    res.status(404).json({
      message: "Lỗi khi lấy danh sách bản ghi AuditLog: " + e.message,
    });
  }
};
