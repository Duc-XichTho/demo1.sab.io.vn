import {DataTypes} from "sequelize";
import {config} from "dotenv"; config();

export const createDeNghiThanhToanModel = async (sequelize) => {
    const DeNghiThanhToan = sequelize.define(
        " deNghiThanhToan",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            hopDong: {
                type: DataTypes.STRING,
            },
            hoaDon: {
                type: DataTypes.STRING,
            },
            phieu_lq: {
                type: DataTypes.JSONB,
            },
            code: {
                type: DataTypes.STRING,
            },
            id_card_create:{
                type: DataTypes.INTEGER,
                defaultValue: null
            },
            id_de_nghi_mua: {
                type: DataTypes.TEXT,
                defaultValue: null
            },
            id_tam_ung: {
                type: DataTypes.INTEGER,
                defaultValue: null
            },
            id_nhan_vien: {
                type: DataTypes.INTEGER,
                defaultValue: null
            },
            id_bo_phan: {
                type: DataTypes.INTEGER,
                defaultValue: null
            },
            ngay_du_kien_thanh_toan: {
                type: DataTypes.STRING,
            },

            mo_ta: {
                type: DataTypes.TEXT,
            },
            tk_nhan_tien:{
                type: DataTypes.TEXT,
            },
            tong_tien:{
                type: DataTypes.DECIMAL,
            },

            company: {
                type: DataTypes.STRING,
            },
            tien_nguyen_te : {
                type: DataTypes.TEXT,
            },
            ty_gia : {
                type: DataTypes.TEXT,
            },
            trang_thai: {
                type: DataTypes.BOOLEAN,
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
            tableName: "deNghiThanhToan",
            schema: process.env.SCHEMA,
        }
    );
    return DeNghiThanhToan;
};
