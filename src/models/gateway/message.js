import { DataTypes } from "sequelize";

export const createMessageGWModel = async (sequelize) => {
  const Message = sequelize.define(
    "message",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
      },
      message: {
        type: DataTypes.TEXT,
      },
      mention: {
        type: DataTypes.ARRAY(DataTypes.STRING),
      },
      type: {
        type: DataTypes.STRING,
      },
      user: {
        type: DataTypes.STRING,
      },
      ticket_Id: {
        type: DataTypes.INTEGER,
      },
      show: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    },
    {
      tableName: "message",
      schema: 'gateway',
      timestamps: true,
    }
  );
  return Message;
};
