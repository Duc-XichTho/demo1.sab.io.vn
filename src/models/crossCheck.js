import { DataTypes } from "sequelize";
import {config} from "dotenv"; config();

export const createCrossCheckModel = async (sequelize) => {
    const CrossCheck = sequelize.define(
        "crossCheck",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            type: {
                type: DataTypes.STRING,
            },
            company: {
                type: DataTypes.STRING,
            },
            name: {
                type: DataTypes.TEXT,
            },
            desc: {
                type: DataTypes.TEXT,
            },
            difference_ratio: {
                type: DataTypes.DECIMAL(5, 2),
            },
            primarySource: {
                type: DataTypes.JSONB,
            },
            checkingSource: {
                type: DataTypes.JSONB,
            },
            result: {
                type: DataTypes.TEXT,
            },
            userClass: {
                type: DataTypes.JSONB,
            },
            position: {
                type: DataTypes.INTEGER,
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
            info: {
                type: DataTypes.JSONB,
            },
            show: {
                type: DataTypes.BOOLEAN,
                defaultValue: true,
            },
        },
        {
            tableName: "crossCheck",
            schema: process.env.SCHEMA,
        }
    );
    return CrossCheck;
};
