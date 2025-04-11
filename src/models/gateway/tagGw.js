import { DataTypes } from "sequelize";

export const createTagGWModel = async (sequelize) => {
  const TagGw = sequelize.define(
    "tag_gw",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
      },
      show: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    },
    {
      tableName: "tag_gw",
      schema: 'gateway',
    }
  );
  return TagGw;
};
