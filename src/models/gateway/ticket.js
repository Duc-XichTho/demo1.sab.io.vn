import { DataTypes } from "sequelize";
import { SCHEMA } from "./ZZ_CONST.js";

export const createTicketGWModel = async (sequelize) => {
  const Ticket = sequelize.define(
    "ticket",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING,
      },
      user: {
        type: DataTypes.STRING,
      },
      review: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      completed: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      warning: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      type: {
        type: DataTypes.STRING,
      },
      pic: {
        type: DataTypes.STRING,
      },
      tag: {
        type: DataTypes.STRING,
      },
      status: {
        type: DataTypes.STRING,
      },
      deadline: {
        type: DataTypes.DATEONLY,
      },
      hasComments: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      companyId: {
        type: DataTypes.INTEGER,
      },
      noteContent: {
        type: DataTypes.TEXT,
      },
      show: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    },
    {
      tableName: "ticket",
      schema: SCHEMA,
      timestamps: true,
    }
  );
  return Ticket;
};
