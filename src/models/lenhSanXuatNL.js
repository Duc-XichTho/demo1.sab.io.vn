import { DataTypes } from "sequelize";
import {config} from "dotenv"; config();

export const createLenhSanXuatNLModel = async (sequelize) => {
  const LenhSanXuatNL = sequelize.define(
    "lenhSanXuatNL",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      idLSX: {
        type: DataTypes.INTEGER,
      },
      idNL: {
        type: DataTypes.INTEGER,
      },
      SoLuong: {
        type: DataTypes.INTEGER,
      },
      SoLuongThucTe: {
        type: DataTypes.INTEGER,
      },
      show: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    },
    {
      schema: process.env.SCHEMA,
      tableName: "lenhSanXuatNL",
    }
  );
  return LenhSanXuatNL;
};
