import { DataTypes } from "sequelize";
import { SCHEMA } from './Z_CONST.js';

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
            schema: SCHEMA,
        }
    );
    return Setting;
};
