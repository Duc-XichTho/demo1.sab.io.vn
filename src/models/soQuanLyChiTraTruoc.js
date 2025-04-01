import {DataTypes} from "sequelize";
import {SCHEMA} from './Z_CONST.js';

export const createSoQuanLyChiTraTruocModel = async (sequelize) => {
    const SoQuanLyChiTraTruoc = sequelize.define(
        "soQuanLyChiTraTruoc",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            code: {
                type: DataTypes.STRING,
            },
            loai_chi_phi: {
                type: DataTypes.STRING,
            },
            phong_ban: {
                type: DataTypes.STRING,
            },
            ngay_ghi_nhan_tang: {
                type: DataTypes.DATEONLY,
            },
            so_tien: {
                type: DataTypes.INTEGER,
            },
            so_thang_phan_bo: {
                type: DataTypes.INTEGER,
            },
            so_tien_con_lai: {
                type: DataTypes.INTEGER,
            },

            tK_theo_doi: {
                type: DataTypes.STRING,
            },
            tK_chi_phi: {
                type: DataTypes.STRING,
            },
            mo_ta: {
                type: DataTypes.TEXT,
            },
            kho: {
                type: DataTypes.STRING,
            },
            bp_su_dung: {
                type: DataTypes.STRING,
            },
            so_chung_tu: {
                type: DataTypes.STRING,
            },

            thoi_gian_bat_dau: {
                type: DataTypes.DATEONLY,
            },

            chu_thich: {
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
            tableName: "soQuanLyChiTraTruoc",
            schema: SCHEMA,
        }
    );
    return SoQuanLyChiTraTruoc;
};
