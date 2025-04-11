import {config} from "dotenv"; config();
import { DataTypes } from 'sequelize';

export const createKTQTTeamModel = async (sequelize) => {
  const  KTQTTeam= sequelize.define(
    'ktqtTeam',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      code: {
        type: DataTypes.STRING,
      },
      name: {
        type: DataTypes.STRING,
      },
      unit_code: {
        type: DataTypes.STRING,
      },
      dp: {
        type: DataTypes.TEXT,
      },
      dp1: {
        type: DataTypes.TEXT,
      },
      dp2: {
        type: DataTypes.TEXT,
      },
      company: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      createAt: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      stt: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      show: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    },
    {
      schema: process.env.SCHEMA,
    }
  );
  return KTQTTeam;
};
