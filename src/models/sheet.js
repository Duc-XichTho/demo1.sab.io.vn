import { DataTypes } from "sequelize";
import { SCHEMA } from './Z_CONST.js';

export const createSheetModel = async (sequelize) => {
    const Sheet = sequelize.define(
        "sheet",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            sub_step_id: {
                type: DataTypes.INTEGER,
            },
            card_id: {
                type: DataTypes.INTEGER,
            },
            position: {
                type: DataTypes.INTEGER,
            },
            updated_at: {
                type: DataTypes.STRING,
            },
            deleted_at: {
                type: DataTypes.STRING,
            },
            user_create: {
                type: DataTypes.STRING,
            },
            user_update: {
                type: DataTypes.STRING,
            },
            user_delete: {
                type: DataTypes.STRING,
            },
            show: {
                type: DataTypes.BOOLEAN,
                defaultValue: true,
            }
        },
        {
            schema: SCHEMA,
            tableName: "sheet",
            timestamps: false,
        }
    );
    return Sheet;
};