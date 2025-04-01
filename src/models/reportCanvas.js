import {DataTypes} from "sequelize";
import {SCHEMA} from './Z_CONST.js';

export const createReportCanvasModel = async (sequelize) => {
    const ReportCanvas = sequelize.define(
        "reportCanvas",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            code: {
                type: DataTypes.STRING,
            },
            name: {
                type: DataTypes.TEXT,
            },
            list_tag: {
                type: DataTypes.JSONB
            },
            user_class: {
                type: DataTypes.JSONB
            },
            type: {
                type: DataTypes.STRING,
            },
            tab: {
                type: DataTypes.STRING,
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
            tableName: "reportCanvas",
            schema: SCHEMA,
        }
    );
    return ReportCanvas;
};
