import {DataTypes} from "sequelize";
import {config} from "dotenv"; config();

export const createBCanvasDataOriginalRowModel = async (sequelize) => {
    const BCanvasDataOriginalRow = sequelize.define(
        "bCanvasDataOriginalRow",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            id_DataOriginal : {
                type: DataTypes.INTEGER,
            },
            data : {
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
            tableName: "bCanvasDataOriginalRow",
            schema: process.env.SCHEMA,
        }
    );
    return BCanvasDataOriginalRow;
};
