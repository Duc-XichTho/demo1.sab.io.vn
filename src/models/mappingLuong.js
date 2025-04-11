import {config} from "dotenv"; config();
import { DataTypes } from 'sequelize';

export const createMappingLuongModel = async (sequelize) => {
  const MappingLuong = sequelize.define(
    'mapping_luong',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
        field_z: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
        header: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
        tk_no: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
        tk_co: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
        kmf: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      company: {
        type: DataTypes.TEXT,
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
      tableName: 'mapping_luong',
      timestamps: false,
    }
  );
  return MappingLuong;
};
