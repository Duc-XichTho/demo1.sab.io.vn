import {DataTypes} from "sequelize";
import {config} from "dotenv"; config();

export const createTaiSanDauTuModel = async (sequelize) => {
    const TaiSanDauTu = sequelize.define(
        "taiSanDauTu",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            code: {
                type: DataTypes.STRING,
            },
            name: {
                type: DataTypes.STRING,
            },
            company: {
                type: DataTypes.STRING,
            },

            note: {
                type: DataTypes.TEXT
            },
            mo_ta: {
                type: DataTypes.TEXT,
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
            tableName: "taiSanDauTu",
            schema: process.env.SCHEMA,
        }
    );
    return TaiSanDauTu;
};
