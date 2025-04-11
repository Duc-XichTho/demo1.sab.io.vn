import { DataTypes } from "sequelize";
import {config} from "dotenv"; config();

export const createCategoryModel = async (sequelize) => {
    const category = sequelize.define(
        "category",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            code : {
                type: DataTypes.STRING,
            },
            company : {
                type: DataTypes.STRING,
            },
            year : {
                type: DataTypes.STRING,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            show: {
                type: DataTypes.BOOLEAN,
                defaultValue: true
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
        },
        {
            tableName: "category",
            schema: process.env.SCHEMA,
        }
    );
    return category;
};