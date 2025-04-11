import {DataTypes} from "sequelize";
import {config} from "dotenv"; config();

export const createQuanLyTagModel = async (sequelize) => {
    const QuanLyTag = sequelize.define(
        "quanLyTag",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },

            name: {
                type: DataTypes.STRING,
            },
            code: {
                type: DataTypes.STRING,
            },
            mo_ta: {
                type: DataTypes.STRING,
            },

            nhom: {
                type: DataTypes.STRING,
            },

            user_class: {
                type: DataTypes.JSONB,
                defaultValue:[]
            },
            bo: {
                type: DataTypes.JSONB,
                defaultValue:[]
            },
            year: {
                type: DataTypes.INTEGER,
            },
            company: {
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
            },
        },
        {
            tableName: "quanLyTag",
            schema: process.env.SCHEMA,
        }
    );
    return QuanLyTag;
};
