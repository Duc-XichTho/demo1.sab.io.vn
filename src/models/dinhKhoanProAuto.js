import { DataTypes } from "sequelize";
import {config} from "dotenv"; config();

export const createDinhKhoanProAutoModel = async (sequelize) => {
    const DinhKhoanProAuto = sequelize.define(
        "dinhKhoanProAuto",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            sub_step_id: {
                type: DataTypes.INTEGER,
            },
            card_id: {
                type: DataTypes.INTEGER,
            },
            sheed_id: {
                type: DataTypes.INTEGER,
            },
            ngay: {
                type: DataTypes.JSONB,
            },
            chuThich: {
                type: DataTypes.JSONB,
            },
            tkNo: {
                type: DataTypes.JSONB,
            },
            tkCo: {
                type: DataTypes.JSONB,
            },
            soTien: {
                type: DataTypes.JSONB,
            },
            kmtc: {
                type: DataTypes.JSONB
            },
            duAn: {
                type: DataTypes.JSONB
            },
            kmf: {
                type: DataTypes.JSONB
            },
            sanPham: {
                type: DataTypes.JSONB
            },
            ncc: {
                type: DataTypes.JSONB
            },
            hopDong: {
                type: DataTypes.JSONB
            },
            khachHang: {
                type: DataTypes.JSONB
            }
        },
        {
            schema: process.env.SCHEMA,
            tableName: "dinhKhoanProAuto",
            timestamps: false,
        }
    );
    return DinhKhoanProAuto;
};