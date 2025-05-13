import {DataTypes} from "sequelize";
import {config} from "dotenv";

config();

export const createDienGiaiModel = async (sequelize) => {
    const DienGiai = sequelize.define(
        "DienGiai",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            name: {
                type: DataTypes.TEXT,
            },
            code: {
                type: DataTypes.STRING,
            },
            phan_loai: {
                type: DataTypes.STRING,
            },
            dien_giai: {
                type: DataTypes.TEXT,
            },
            chu_thich : {
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
            tableName: "dienGiai",
            schema: process.env.SCHEMA,
        }
    );
    return DienGiai;
};
