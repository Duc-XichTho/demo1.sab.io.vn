// models/auditLog.js
import { DataTypes } from "sequelize";
import {config} from "dotenv"; config();

export const createAuditLogModel = async (sequelize) => {
  const AuditLog = sequelize.define(
    "auditLog",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      tableName: {
        type: DataTypes.STRING,
      },
      recordId: {
        type: DataTypes.STRING,
      },
      operation: {
        type: DataTypes.STRING,
      },
      oldValues: {
        type: DataTypes.JSONB,
        defaultValue: null,
      },
      newValues: {
        type: DataTypes.JSONB,
        defaultValue: null,
      },
      email: {
        type: DataTypes.STRING,
      },
      changed_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      tableName: "auditLog",
      schema: process.env.SCHEMA,
    }
  );
  return AuditLog;
};
