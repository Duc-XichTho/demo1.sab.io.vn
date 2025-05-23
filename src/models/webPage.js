import {DataTypes} from "sequelize";
import {config} from "dotenv"; config();

export const createWebPageModel = async (sequelize) => {
    const WebPage = sequelize.define(
        "webPage",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            name: {
                type: DataTypes.STRING,
            },
            headerTitle : {
                type: DataTypes.STRING,
            },
            editor : {
                type: DataTypes.JSONB,
            },
            password : {
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
            tableName: "webPage",
            schema: process.env.SCHEMA,
        }
    );
    return WebPage;
};
