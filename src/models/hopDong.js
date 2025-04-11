import { DataTypes } from "sequelize";
import {config} from "dotenv"; config();

export const createHopDongModel = async (sequelize) => {
    const HopDong = sequelize.define(
        "HopDong",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            mo_ta: {
                type: DataTypes.TEXT,
            },
            code: {
                type: DataTypes.STRING,
            },
            doi_tac: {
                type: DataTypes.TEXT,
            },
            name: {
                type: DataTypes.STRING,
            },
            hieu_luc_tu: {
                type: DataTypes.DATEONLY,
            },
            hieu_luc_den: {
                type: DataTypes.DATEONLY,
            },
            lai_suat_nam: {
                type: DataTypes.STRING,
            },
            du_no_goc: {
                type: DataTypes.DECIMAL,
            },
            muc_dich_vay: {
                type: DataTypes.STRING,
            },
            tai_san_dam_bao: {
                type: DataTypes.STRING,
            },
            ky_tra_lai: {
                type: DataTypes.STRING,
            },
            gia_tri : {
                type: DataTypes.DECIMAL,
            },
            da_xuat : {
                type: DataTypes.DECIMAL,
            },
            ngay_ky: {
                type: DataTypes.DATEONLY,
            },
            dauKy: {
                type: DataTypes.DECIMAL,
            },
            company: {
                type: DataTypes.STRING,
            },
            year: {
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
            chu_thich: {
                type: DataTypes.TEXT,
            },
            loai: {
                type: DataTypes.TEXT,
            },
        },
        {
            tableName: "hopDong",
            schema: process.env.SCHEMA,
        }
    );
    return HopDong;
};
