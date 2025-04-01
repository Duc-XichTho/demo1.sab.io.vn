import { DataTypes } from "sequelize";
import { SCHEMA } from "./ZZ_CONST.js";
import {CompanyGw} from "../../postgres/postgres.js";

export const createCompanyGWModel = async (sequelize) => {
  const CompanyGw = sequelize.define(
    "company_gw",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
      },
      show: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    },
    {
      tableName: "company_gw",
      schema: SCHEMA,
    }
  );
  return CompanyGw;
};
