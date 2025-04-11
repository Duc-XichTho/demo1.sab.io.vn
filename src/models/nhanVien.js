import {DataTypes} from "sequelize";
import {config} from "dotenv"; config();

export const createNhanVienModel = async (sequelize) => {
    const NhanVien = sequelize.define(
        "nhanVien",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
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
            dauKy: {
                type: DataTypes.DECIMAL,
            },
            company: {
                type: DataTypes.STRING,
            },
            year: {
                type: DataTypes.STRING,
            },
            cccd: {
                type: DataTypes.TEXT,
            },
            ngay_sinh: {
                type: DataTypes.DATEONLY,
            },
            email: {
                type: DataTypes.STRING,
            },
            dien_thoai: {
                type: DataTypes.STRING,
            },
            phong_ban: {
                type: DataTypes.TEXT,
            },
            chuc_vu: {
                type: DataTypes.TEXT,
            },
            luong_co_ban: {
                type: DataTypes.DECIMAL,
            },
            mst_ca_nhan: {
                type: DataTypes.TEXT,
            },
            ngay_vao_lam: {
                type: DataTypes.DATEONLY,
            },
            ngay_tam_ung: {
                type: DataTypes.DATEONLY,
            },
            so_tien: {
                type: DataTypes.DECIMAL,
            },
            muc_dich: {
                type: DataTypes.TEXT,
            },
            han_thanh_toan: {
                type: DataTypes.DATEONLY,
            },
            tk_ngan_hang: {
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
            tableName: "nhanVien",
            schema: process.env.SCHEMA,
        }
    );
    return NhanVien;
};
