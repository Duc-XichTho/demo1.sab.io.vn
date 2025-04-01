import { AuditLog } from "../postgres/postgres.js";

// GET
export const getAllAuditLogService = async (page = 1, limit = 50) => {
  try {
    const offset = (page - 1) * limit;
    const { count, rows: dataList } = await AuditLog.findAndCountAll({
      limit: limit,
      offset: offset,
      order: [["id", "DESC"]],
    });

    return {
      data: dataList,
      totalRecords: count,
      currentPage: page,
      totalPages: Math.ceil(count / limit),
      limit: limit,
    };
  } catch (error) {
    throw new Error("Lỗi khi lấy danh sách bản ghi AuditLog: " + error.message);
  }
};

export const getCountAuditLogByTableName = async (table) => {
  try {
    const count = await AuditLog.count({
      where: {
        tableName: table,
      },
    });

    return count;
  } catch (error) {
    throw new Error("Lỗi khi lấy số lượng AuditLog: " + error.message);
  }
};
