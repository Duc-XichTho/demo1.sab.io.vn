import { DataTypes } from "sequelize";
import { SCHEMA } from './Z_CONST.js';

export const createDinhKhoanModel = async (sequelize) => {
    const DinhKhoan = sequelize.define(
        "dinhKhoan",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            company: {
                type: DataTypes.STRING,
            },
            year: {
                type: DataTypes.STRING,
            },
            dien_giai: {
                type: DataTypes.STRING,
            },
            dien_giai_setting: {
                type: DataTypes.JSONB,
            },
            chu_thich: {
                type: DataTypes.TEXT,
            },
            TkNo: {
                type: DataTypes.STRING,
            },
            TkCo: {
                type: DataTypes.STRING,
            },
            so_tien: {
                type: DataTypes.STRING,
            },
            so_tien_setting: {
                type: DataTypes.INTEGER,
            },
            created_at: {
                type: DataTypes.STRING,
            },
            sub_step_id: {
                type: DataTypes.INTEGER,
            },
            card_id: {
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
            schema: SCHEMA,
            tableName: "dinhKhoan",
            timestamps: false,
        }
    );
    return DinhKhoan;
};