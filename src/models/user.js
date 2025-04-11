import { DataTypes } from "sequelize";
import {config} from "dotenv"; config();

export const createUserModel = async (sequelize) => {
  const User = sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
      },
      picture: {
        type: DataTypes.TEXT,
      },
      isAdmin: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      isSendEmail: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      isSendEmailMessage: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      nickName: {
        type: DataTypes.STRING,
      },
      info: {
        type: DataTypes.JSONB,
      },
    },
    {
      tableName: "users",
      schema: process.env.SCHEMA,
    }
  );
  return User;
};