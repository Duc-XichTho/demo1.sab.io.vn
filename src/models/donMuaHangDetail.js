import { DataTypes } from "sequelize";
import {config} from "dotenv"; config();

export const createDonMuaHangDetailModel = async (sequelize) => {
  const DonMuaHangDetail = sequelize.define(
    "DonMuaHangDetail",
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      id_don_mua_hang: {
        type: DataTypes.STRING,
      },
      id_hang_hoa: {
        type: DataTypes.INTEGER,
      },
      code_hang_hoa: {
        type: DataTypes.STRING,
      },
      name_hang_hoa: {
        type: DataTypes.STRING,
      },
      so_luong: {
        type: DataTypes.INTEGER,
      },
      gia_ban: {
        type: DataTypes.DECIMAL,
      },
      code_kmf: {
        type: DataTypes.STRING,
      },
      name_kmf: {
        type: DataTypes.STRING,
      },
      code_kmns: {
        type: DataTypes.STRING,
      },
      name_kmns: {
        type: DataTypes.STRING,
      },
      code_vu_viec: {
        type: DataTypes.STRING,
      },
      name_vu_viec: {
        type: DataTypes.STRING,
      },
      thue_vat: {
        type: DataTypes.DECIMAL,
      },
      thue_vat_value: {
        type: DataTypes.DECIMAL,
      },
      tong_tien: {
        type: DataTypes.DECIMAL,
      },
      created_at: {
        type: DataTypes.STRING,
      },
      show: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    },
    {
      tableName: "donMuaHangDetail",
      schema: process.env.SCHEMA,
    }
  );
  return DonMuaHangDetail;
};
