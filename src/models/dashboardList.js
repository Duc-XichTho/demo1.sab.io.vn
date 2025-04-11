import { DataTypes } from "sequelize";
import {config} from "dotenv"; config();

export const createDashBoardList = async (sequelize) => {
  const DashBoardList = sequelize.define(
    "dashBoardList",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      company: {
        type: DataTypes.STRING,
      },
      key: {
        type: DataTypes.STRING,
      },
      label: {
        type: DataTypes.STRING,
      },
      position: {
        type: DataTypes.INTEGER,
      },
      show: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    },
    {
      tableName: "dashBoardList",
      schema: process.env.SCHEMA,
    }
  );
  return DashBoardList;
};
