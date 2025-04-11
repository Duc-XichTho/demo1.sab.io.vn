import { DataTypes } from "sequelize";
import {config} from "dotenv"; config();

export const createCFConfigModel = async (sequelize) => {
  const CFConfig = sequelize.define(
    "cf_config",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      plan_id: {
        type: DataTypes.INTEGER,
      },
      name: {
        type: DataTypes.STRING,
      },
      type: {
        type: DataTypes.STRING,
      },
      data: {
        type: DataTypes.JSONB,
      },
      detailSKU: {
        type: DataTypes.JSONB,
      },
      created_at: {
        type: DataTypes.STRING,
      },
      updated_at: {
        type: DataTypes.STRING,
      },
      deleted_at: {
        type: DataTypes.STRING,
      },
      user_create: {
        type: DataTypes.STRING,
      },
      user_update: {
        type: DataTypes.STRING,
      },
      user_delete: {
        type: DataTypes.STRING,
      },
      show: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    },
    {
      tableName: "cf_config",
      schema: process.env.SCHEMA,
    }
  );
  return CFConfig;
};
