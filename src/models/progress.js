import {
    DataTypes
} from "sequelize";
import {
    SCHEMA
} from './Z_CONST.js';

export const createProgressModel = async (sequelize) => {
    const Progress = sequelize.define(
        "progress", {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            name: {
                type: DataTypes.STRING,
            },
            title: {
                type: DataTypes.STRING,
            },
            overview: {
                type: DataTypes.TEXT,
            },
            chat: {
                type: DataTypes.JSONB,
            },
            status: {
                type: DataTypes.STRING,
            },
            show: {
                type: DataTypes.BOOLEAN,
                defaultValue: true,
            }
        }, {
            tableName: "progress",
            schema: SCHEMA,
        }
    );
    return Progress;
};