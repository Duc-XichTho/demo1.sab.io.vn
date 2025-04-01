import { DataTypes } from "sequelize";
import { SCHEMA } from "./Z_CONST.js";

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
      schema: SCHEMA,
      tableName: "lenhSanXuatNL",
    }
  );
  return LenhSanXuatNL;
};
