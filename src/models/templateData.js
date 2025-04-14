import { DataTypes } from "sequelize";
import {config} from "dotenv"; config();

export const createTemplateDataModel = async (sequelize) => {
  const TemplateData = sequelize.define(
    "template_data",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
        id_DataOriginal: {
        type: DataTypes.DECIMAL,
        allowNull: true,
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
      schema: process.env.SCHEMA,
    }
  );
  return TemplateData;
};
