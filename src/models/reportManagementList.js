import {config} from "dotenv"; config();
import { DataTypes } from 'sequelize';

export const createKTQTReportManagementListModel = async (sequelize) => {
  const fields = {};
  for (let i = 1; i <= 12; i++) {
    fields[`t${i}`] = {
      type: DataTypes.DECIMAL,
      allowNull: true,
    };
  }
  for (let i = 1; i <= 4; i++) {
    fields[`q${i}`] = {
      type: DataTypes.DECIMAL,
      allowNull: true,
    };
  }
  const KTQTReportManagementList = sequelize.define(
    'ktqtReportManagementList',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      management_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      ...fields,
      name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      year: {
        type: DataTypes.DECIMAL,
        allowNull: true,
      },
      company: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      createAt: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      show: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    },
    {
      schema: process.env.SCHEMA,
      tableName: 'ktqtReportManagementList',
      timestamps: false,
    }
  );
  return KTQTReportManagementList;
};
