import {
  DataTypes
} from "sequelize";
import {
  SCHEMA
} from "./Z_CONST.js";

export const createUserClassModel = async (sequelize) => {
  const UserClass = sequelize.define(
    "UserClass", {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
      },
      module: {
        type: DataTypes.STRING,
      },
      company: {
        type: DataTypes.STRING,
      },
      userAccess: {
        type: DataTypes.JSONB,
      },
      chainAccess: {
        type: DataTypes.JSONB,
      },
      templateAccess: {
        type: DataTypes.JSONB,
      },
      stepAccess: {
        type: DataTypes.JSONB,
      },
      subStepAccess: {
        type: DataTypes.JSONB,
      },
      progressTaskAccess: {
        type: DataTypes.JSONB,
      },
      reportChart: {
        type: DataTypes.JSONB,
      },
      reportChartGroup: {
        type: DataTypes.JSONB,
      },
      info: {
        type: DataTypes.JSONB,
      },
    }, {
      tableName: "userClass",
      schema: SCHEMA,
    }
  );
  return UserClass;
};