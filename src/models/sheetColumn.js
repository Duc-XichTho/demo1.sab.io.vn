import { DataTypes } from "sequelize";
import {config} from "dotenv"; config();

export const createSheetColumnModel = async (sequelize) => {
  const SheetColumn = sequelize.define(
    "sheetColumn",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      sheet_id: {
        type: DataTypes.INTEGER,
      },
      clone_id: {
        type: DataTypes.INTEGER,
      },
      name: {
        type: DataTypes.STRING,
      },
      type: {
        type: DataTypes.STRING,
      },
      columnWidth: {
        type: DataTypes.INTEGER,
      },
      formulaSetting: {
        type: DataTypes.JSONB,
      },
      formulaInputSetting: {
        type: DataTypes.JSONB,
      },
      order: {
        type: DataTypes.INTEGER,
      },
      vLookupSetting: {
        type: DataTypes.JSONB,
      },
      show: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    },
    {
      schema: process.env.SCHEMA,
      tableName: "sheetColumn",
      timestamps: false,
    }
  );
  return SheetColumn;
};
