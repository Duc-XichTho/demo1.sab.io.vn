import {config} from "dotenv"; config();
import { DataTypes } from 'sequelize';

export const createLuongModel = async (sequelize) => {
  const Luong = sequelize.define(
    'luong',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
        doi_tuong: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
        cost_object: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
        bu: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
        cf_luong_gross: {
        type: DataTypes.DECIMAL,
        allowNull: true,
      },
        luong_co_dinh: {
        type: DataTypes.DECIMAL,
        allowNull: true,
      },
        luong_bo_sung: {
        type: DataTypes.DECIMAL,
        allowNull: true,
      },
        ot: {
        type: DataTypes.DECIMAL,
        allowNull: true,
      },
        phu_cap: {
        type: DataTypes.DECIMAL,
        allowNull: true,
      },
        thuong: {
        type: DataTypes.DECIMAL,
        allowNull: true,
      },
        khac: {
        type: DataTypes.DECIMAL,
        allowNull: true,
      },
        bhxh_cty_tra: {
        type: DataTypes.DECIMAL,
        allowNull: true,
      },
        bhyt_cty_tra: {
        type: DataTypes.DECIMAL,
        allowNull: true,
      },
        bhtn_cty_tra: {
        type: DataTypes.DECIMAL,
        allowNull: true,
      },
        cong_doan: {
        type: DataTypes.DECIMAL,
        allowNull: true,
      },
        bhxh_nv_tra: {
        type: DataTypes.DECIMAL,
        allowNull: true,
      },
        bhyt_nv_tra: {
        type: DataTypes.DECIMAL,
        allowNull: true,
      },
        bhtn_nv_tra: {
        type: DataTypes.DECIMAL,
        allowNull: true,
      },
        thue_tncn: {
        type: DataTypes.DECIMAL,
        allowNull: true,
      },
      company: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      month: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      year: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      duyet: {
        type: DataTypes.TEXT,
        defaultValue:0,
        allowNull: true,
      },
      createAt: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      show: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    },
    {
      schema: process.env.SCHEMA,
      tableName: 'luong',
      timestamps: false,
    }
  );
  return Luong;
};
