import { DataTypes } from "sequelize";
import {config} from "dotenv"; config();

export const createKhachHangModel = async (sequelize) => {
    const KhackHang = sequelize.define(
        "khachHang",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            dauKy: {
                type: DataTypes.DECIMAL,
            },
            code: {
                type: DataTypes.STRING,
            },
            name: {
                type: DataTypes.STRING,
            },
            dinh_danh: {
                type: DataTypes.STRING,
            },
            company: {
                type: DataTypes.STRING,
            },
            year: {
                type: DataTypes.STRING,
            },
            ma_kh: {
                type: DataTypes.TEXT,
            },

            ten_giao_dich: {
                type: DataTypes.TEXT,
            },
            mst: {
                type: DataTypes.TEXT,
            },
            dia_chi: {
                type: DataTypes.TEXT,
            },
            email: {
                type: DataTypes.STRING,
            },
            email_phu_trach: {
                type: DataTypes.STRING,
            },
            dien_thoai: {
                type: DataTypes.STRING,
            },
            nguoi_lien_he: {
                type: DataTypes.TEXT,
            },
            han_muc_cong_no: {
                type: DataTypes.DECIMAL,
            },
            nhom_kh: {
                type: DataTypes.TEXT,
            },
            dieu_khoan_tt: {
                type: DataTypes.TEXT,
            },
            phuong_thuc_tt: {
                type: DataTypes.TEXT,
            },
            nv_phu_trach: {
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
            tableName: "khachHang",
            schema: process.env.SCHEMA,
        }
    );
    return KhackHang;
};
