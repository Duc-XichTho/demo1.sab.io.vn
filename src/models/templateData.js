import { DataTypes } from "sequelize";
import { SCHEMA } from "./Z_CONST.js";

export const createTemplateDataModel = async (sequelize) => {
  const TemplateData = sequelize.define(
    "template_data",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      tableId: {
        type: DataTypes.DECIMAL,
        allowNull: true,
      },
      data: {
        type: DataTypes.JSONB,
        allowNull: true,
      },
      show: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    },
    {
      tableName: "template_data",
      timestamps: false,
      schema: SCHEMA,
    }
  );
  return TemplateData;
};
