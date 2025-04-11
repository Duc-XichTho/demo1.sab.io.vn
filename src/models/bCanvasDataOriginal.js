import {DataTypes} from "sequelize";
import {config} from "dotenv"; config();

export const createBCanvasDataOriginalModel = async (sequelize) => {
    const BCanvasDataOriginal = sequelize.define(
        "bCanvasDataOriginal",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            fileNote_id : {
                type: DataTypes.INTEGER,
            },
            name : {
                type: DataTypes.TEXT,
            },
            columns : {
                type: DataTypes.JSONB,
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
            tableName: "bCanvasDataOriginal",
            schema: process.env.SCHEMA,
        }
    );
    return BCanvasDataOriginal;
};
