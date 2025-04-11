import {DataTypes} from "sequelize";
import {config} from "dotenv"; config();

export const createDetailLenhSanXuatModel = async (sequelize) => {
    const DetailLenhSanXuat = sequelize.define(
        "detailLenhSanXuat",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            code_sx: {
                type: DataTypes.STRING,
            },
            code_hh: {
                type: DataTypes.STRING,
            },
            tkkt: {
                type: DataTypes.STRING,
            },
            so_luong: {
                type: DataTypes.INTEGER,
            },
            loai: {
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
            tableName: "detailLenhSanXuat",
            schema: process.env.SCHEMA,
        }
    );
    return DetailLenhSanXuat;
};
