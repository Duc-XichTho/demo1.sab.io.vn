import { DataTypes } from "sequelize";
import {config} from "dotenv"; config();

export const createKpiCalculatorModel = async (sequelize) => {
  const kpiCalculator = sequelize.define(
    "kpiCalculator",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
      },
      generalName: {
        type: DataTypes.STRING,
      },
      unit: {
        type: DataTypes.STRING,
      },
      code: {
        type: DataTypes.STRING,
      },
      period: {
        type: DataTypes.STRING,
      },
      periodField: {
        type: DataTypes.STRING,
      },
      dataSource: {
        type: DataTypes.STRING,
      },
      calcType: {
        type: DataTypes.STRING,
      },
      calc: {
        type: DataTypes.JSONB,
      },
      tableVersion: {
        type: DataTypes.STRING,
      },
      tableData: {
        type: DataTypes.JSONB,
      },
      show: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    },
    {
      tableName: "kpiCalculator",
      schema: process.env.SCHEMA,
    }
  );
  return kpiCalculator;
};
