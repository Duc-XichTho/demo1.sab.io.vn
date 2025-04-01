import {DataTypes} from "sequelize";
import {SCHEMA} from './Z_CONST.js';

export const createPhieuXuatModel = async (sequelize) => {
    const PhieuXuat = sequelize.define(
        "phieuXuat",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            phieu_lq: {
                type: DataTypes.JSONB,
            },
            gom:{
                type: DataTypes.STRING,
            },
            id_card_create:{
                type: DataTypes.INTEGER,
                defaultValue: null
            },
            id_dieu_chuyen_kho: {
                type: DataTypes.INTEGER,
                defaultValue:null
            },
            donHang: {
                type: DataTypes.STRING,
            },
            code: {
                type: DataTypes.STRING,
            },
            id_nhan_vien: {
                type: DataTypes.INTEGER,
            },
            id_khach_hang: {
                type: DataTypes.INTEGER,
            },
            id_nha_cung_cap: {
                type: DataTypes.INTEGER,
            },
            ngay: {
                type: DataTypes.STRING,
            },
            company: {
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
            lenh_san_xuat: {
                type: DataTypes.JSONB,
            },
            show: {
                type: DataTypes.BOOLEAN,
                defaultValue: true,
            },
        },
        {
            tableName: "phieuXuat",
            schema: SCHEMA,
        }
    );
    return PhieuXuat;
};
