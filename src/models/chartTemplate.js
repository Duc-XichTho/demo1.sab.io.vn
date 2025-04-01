import {DataTypes} from "sequelize";
import {SCHEMA} from './Z_CONST.js';

export const createChartTemplateModel = async (sequelize) => {
    const ChartTemplate = sequelize.define(
        "chartTemplate",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            conditions: {
                type: DataTypes.JSONB,
            },
            company: {
                type: DataTypes.STRING,
            },
            name : {
                type: DataTypes.TEXT,
            },
            type : {
                type: DataTypes.TEXT,
            },
            id_template : {
                type: DataTypes.INTEGER,
            },
            id_filenote : {
                type: DataTypes.INTEGER,
            },
            v1: {
                type: DataTypes.TEXT,
            },
            v2: {
                type: DataTypes.TEXT,
            },
            v3: {
                type: DataTypes.TEXT,
            },
            trang_thai: {
                type: DataTypes.STRING,
            },
            created_at: {
                type: DataTypes.STRING,
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
            },
        },
        {
            tableName: "chartTemplate",
            schema: SCHEMA,
        }
    );
    return ChartTemplate;
};
