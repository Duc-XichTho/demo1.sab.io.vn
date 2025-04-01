import {DataTypes} from "sequelize";
import {SCHEMA} from "./Z_CONST.js";

export const createDonHangModel = async (sequelize) => {
    const DonHang = sequelize.define(
        "DonHang",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            code2: {
                type: DataTypes.STRING,
            },
            phieu_lq: {
                type: DataTypes.JSONB,
            },
            company: {
                type: DataTypes.STRING,
            },
            code: {
                type: DataTypes.STRING,
            },
            ngay_dat_hang: {
                type: DataTypes.STRING,
            },
            trang_thai: {
                type: DataTypes.STRING,
            },
            code_vu_viec: {
                type: DataTypes.STRING,
            },
            name_vu_viec: {
                type: DataTypes.STRING,
            },
            code_khach_hang: {
                type: DataTypes.STRING,
            },
            name_khach_hang: {
                type: DataTypes.STRING,
            },
            tien_truoc_thue: {
                type: DataTypes.DECIMAL,
            },
            tien_thue: {
                type: DataTypes.INTEGER,
            },
            hinh_thuc_thanh_toan: {
                type: DataTypes.STRING,
            },
            dieu_khoan_thanh_toan: {
                type: DataTypes.STRING,
            },
            dia_diem_giao_hang: {
                type: DataTypes.TEXT,
            },
            dinh_kem: {
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
            show: {
                type: DataTypes.BOOLEAN,
                defaultValue: true,
            },
        },
        {
            tableName: "donHang",
            schema: SCHEMA,
        }
    );
    return DonHang;
};
