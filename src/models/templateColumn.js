import { DataTypes } from "sequelize";
import { SCHEMA } from "./Z_CONST.js";

export const createTemplateColumnModel = async (sequelize) => {
  const templateColumn = sequelize.define(
    "template_column",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      columnIndex: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      tableId: {
        type: DataTypes.DECIMAL,
        allowNull: true,
      },
      columnName: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      columnType: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      columnWidth: {
        type: DataTypes.DECIMAL,
        allowNull: true,
      },
      selectOptions: {
        type: DataTypes.JSONB,
        allowNull: true,
      },
      selectColumnSheet: {
        type: DataTypes.JSONB,
        allowNull: true,
      },
      selectFormula: {
        type: DataTypes.JSONB,
        allowNull: true,
      },
      selectVLookUp: {
        type: DataTypes.JSONB,
        allowNull: true,
      },
      selectCalcDate: {
        type: DataTypes.JSONB,
        allowNull: true,
      },
      selectEmailBot: {
        type: DataTypes.JSONB,
        allowNull: true,
      },
      conditionalOptions: {
        type: DataTypes.JSONB,
        allowNull: true,
      },
      textColor: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      bgColor: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      editor: {
        type: DataTypes.JSONB,
        allowNull: true,
      },
      show: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    },
    {
      tableName: "template_column",
      timestamps: false,
      schema: SCHEMA,
    }
  );
  return templateColumn;
};
