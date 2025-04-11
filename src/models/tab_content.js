import { DataTypes } from "sequelize";
import {config} from "dotenv"; config();

export const createTabContentModel = async (sequelize) => {
    const tabContent = sequelize.define(
        "tab_content",
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
            content: {
                type: DataTypes.TEXT,
                allowNull: true
            },
            category: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            type: {
                type: DataTypes.STRING,
                allowNull: true
            },
            aiGen: {
                type: DataTypes.BOOLEAN,
                defaultValue: false
            },
            favorite: {
                type: DataTypes.BOOLEAN,
                defaultValue: false
            },
            userEmail: {
                type: DataTypes.STRING,
                allowNull: true
            },
            show: {
                type: DataTypes.BOOLEAN,
                defaultValue: true
            }
        },
        {
            tableName: "tab_content",
            schema: process.env.SCHEMA,
            timestamps: true,
            createdAt: 'created_at',
            updatedAt: 'updated_at'
        }
    );

    return tabContent;
};