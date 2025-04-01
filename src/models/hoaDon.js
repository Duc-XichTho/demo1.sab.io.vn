import { DataTypes } from "sequelize";
import { SCHEMA } from './Z_CONST.js';

export const createHoaDonModel = async (sequelize) => {
    const HoaDon = sequelize.define(
        "hoaDon",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            hopDong: {
                type: DataTypes.STRING,
            },
            phieu_lq: {
                type: DataTypes.JSONB,
            },
            list_id_phieu_xuat:{
                type: DataTypes.JSONB,
            },
            id_card_create:{
                type: DataTypes.INTEGER,
                defaultValue: null
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
            stt: {
                type: DataTypes.STRING,
            },
            date: {
                type: DataTypes.STRING,
            },
            ky_hieu_hd: {
                type: DataTypes.STRING,
            },
            tong_gia_tri: {
                type: DataTypes.DECIMAL,
            },
            thue_suat: {
                type: DataTypes.STRING,
            },
            tien_thue: {
                type: DataTypes.DECIMAL,
            },
            hinh_thuc_tt: {
                type: DataTypes.STRING,
            },
            id_ncc: {
                type: DataTypes.INTEGER,
            },
            id_khach_hang: {
                type: DataTypes.INTEGER,
            },
            khach_hang: {
                type: DataTypes.STRING,
            },
            so_chung_tu: {
                type: DataTypes.STRING,
            },
            loai: {
                type: DataTypes.STRING,
            },
            trang_thai: {
                type: DataTypes.STRING,
            },
            mau_so: {
                type: DataTypes.STRING,
            },
            address: {
                type: DataTypes.STRING,
            },
            so_hoa_don: {
                type: DataTypes.STRING,
            },
            tong_gia_tri_chua_thue: {
                type: DataTypes.DECIMAL,
            },
            type: {
                type: DataTypes.STRING,
            },
            note: {
                type: DataTypes.TEXT,
            },

            reminder: {
                type: DataTypes.BOOLEAN,
                defaultValue: false,
            },

            email_sent: {
                type: DataTypes.BOOLEAN,
                defaultValue: false,
            },
            tien_nguyen_te : {
                type: DataTypes.TEXT,
            },
            ty_gia : {
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
            list_id_phieu_thu: {
                type: DataTypes.JSONB,
            },
            show: {
                type: DataTypes.BOOLEAN,
                defaultValue: true,
            },
        },
        {
            tableName: "hoaDon",
            schema: SCHEMA,
        }
    );
    return HoaDon;
};
