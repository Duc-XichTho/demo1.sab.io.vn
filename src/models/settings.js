import { DataTypes } from "sequelize";
import {config} from "dotenv"; config();

export const createSettingModel = async (sequelize) => {
    const Setting = sequelize.define(
        "setting",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            type: {
                type: DataTypes.STRING,
            },
            setting: {
                type: DataTypes.JSONB,
            },
        },
        {
            tableName: "setting",
            schema: process.env.SCHEMA,
        }
    );
    return Setting;
};
