import { DataTypes } from "sequelize";
import {config} from "dotenv"; config();

export const createSoQuanLyTaiSanModel = async (sequelize) => {
    const SoQuanLyTaiSan = sequelize.define(
        "soQuanLyTaiSan",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            year: {
                type: DataTypes.STRING,
            },
            company: {
                type: DataTypes.STRING,
            },
            code: {
                type: DataTypes.STRING,
            },
            name: {
                type: DataTypes.STRING,
            },
            dauKy : {
                type: DataTypes.DECIMAL,
            },
            kho: {
                type: DataTypes.STRING,
            },
            tk_nguyen_gia: {
                type: DataTypes.STRING,
            },
            tk_khau_hao: {
                type: DataTypes.STRING,
            },
            tk_chi_phi: {
                type: DataTypes.STRING,
            },
            chung_tu: {
                type: DataTypes.STRING,
            },
            ngay_ghi_nhan_tai_san: {
                type: DataTypes.DATEONLY,
            },
            nguyen_gia_tai_ngay_ghi_nhan: {
                type: DataTypes.INTEGER,
            },
            khau_hao_tai_ngay_ghi_nhan: {
                type: DataTypes.INTEGER,
            },
            khau_hao_trong_ky: {
                type: DataTypes.INTEGER,
            },
            gia_tri_con_lai_tai_ngay_ghi_nhan: {
                type: DataTypes.INTEGER,
            },
            gia_tri_con_lai_cuoi_ky: {
                type: DataTypes.INTEGER,
            },
            ngay_bat_dau_khau_hao: {
                type: DataTypes.DATEONLY,
            },
            bo_phan_su_dung: {
                type: DataTypes.STRING,
            },
            khoan_muc_kqkd: {
                type: DataTypes.STRING,
            },
            trang_thai: {
                type: DataTypes.STRING,
            },
            so_thang_phan_bo: {
                type: DataTypes.INTEGER,
            },
            show: {
                type: DataTypes.BOOLEAN,
                defaultValue: true,
            },
        },
        {
            tableName: "soQuanLyTaiSan",
            schema: process.env.SCHEMA,
            timestamps: true,
            createdAt: 'created_at',
            updatedAt: 'updated_at'
        }
    );
    return SoQuanLyTaiSan;
};
