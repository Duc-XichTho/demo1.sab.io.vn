import { DataTypes } from "sequelize";
import {config} from "dotenv"; config();

export const createLenhSanXuatModel = async (sequelize) => {
    const LenhSanXuat = sequelize.define(
        "lenhSanXuat",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            sanPhamIdList: {
                type: DataTypes.JSONB,
            },
            code: {
                type: DataTypes.STRING,
            },
            name: {
                type: DataTypes.STRING,
            },
            ngay_tao: {
                type: DataTypes.DATEONLY,
            },
            ngay_dk_hoan_thanh: {
                type: DataTypes.DATEONLY,
            },
            noi_dung: {
                type: DataTypes.TEXT,
            },
            trang_thai: {
                type: DataTypes.STRING,
            },
            ghi_chu: {
                type: DataTypes.TEXT,
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
            tableName: "lenhSanXuat",
            schema: process.env.SCHEMA,
        }
    );
    return LenhSanXuat;
};
