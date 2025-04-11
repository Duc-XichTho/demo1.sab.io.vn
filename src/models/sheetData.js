import { DataTypes } from "sequelize";
import {config} from "dotenv"; config();

export const createSheetDataModel = async (sequelize) => {
  const SheetData = sequelize.define(
    "sheetData",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      sheet_id: {
        type: DataTypes.INTEGER,
      },
      data: {
        type: DataTypes.JSONB,
      },
      show: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    },
    {
      schema: process.env.SCHEMA,
      tableName: "sheetData",
      timestamps: false,
    }
  );
  return SheetData;
};
