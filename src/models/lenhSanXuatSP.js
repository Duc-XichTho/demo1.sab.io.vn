import { DataTypes } from "sequelize";
import {config} from "dotenv"; config();

export const createLenhSanXuatSPModel = async (sequelize) => {
  const LenhSanXuatSP = sequelize.define(
    "lenhSanXuatSP",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      idLSX: {
        type: DataTypes.INTEGER,
      },
      idSP: {
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
      tableName: "lenhSanXuatSP",
    }
  );
  return LenhSanXuatSP;
};
