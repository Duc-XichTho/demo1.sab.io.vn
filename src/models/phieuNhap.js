import {DataTypes} from "sequelize";
import {config} from "dotenv"; config();

export const createPhieuNhapModel = async (sequelize) => {
    const PhieuNhap = sequelize.define(
        "phieuNhap",
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
            id_card_create: {
                type: DataTypes.INTEGER,
                defaultValue:null
            },
            id_dieu_chuyen_kho: {
                type: DataTypes.INTEGER,
                defaultValue:null
            },
            id_DNTT: {
                type: DataTypes.INTEGER,
                defaultValue:null
            },
            code: {
                type: DataTypes.STRING,
            },
            id_nhan_vien: {
                type: DataTypes.INTEGER,
            },
            nhom_hang_hoa:{
                type: DataTypes.STRING,
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
            tableName: "phieuNhap",
            schema: process.env.SCHEMA,
        }
    );
    return PhieuNhap;
};
