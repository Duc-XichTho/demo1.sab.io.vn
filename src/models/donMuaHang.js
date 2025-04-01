import {DataTypes} from "sequelize";
import {SCHEMA} from "./Z_CONST.js";

export const createDonMuaHangModel = async (sequelize) => {
    const DonMuaHang = sequelize.define(
        "DonMuaHang",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            phieu_lq: {
                type: DataTypes.JSONB,
            },
            code2: {
                type: DataTypes.STRING,
            },
            company: {
                type: DataTypes.STRING,
            },
            code: {
                type: DataTypes.STRING,
            },
            ngay_mua_hang: {
                type: DataTypes.STRING,
            },
            trang_thai: {
                type: DataTypes.STRING,
            },
            code_bo_phan_de_nghi: {
                type: DataTypes.STRING,
            },
            name_bo_phan_de_nghi: {
                type: DataTypes.STRING,
            },
            code_nhan_vien: {
                type: DataTypes.STRING,
            },
            name_nhan_vien: {
                type: DataTypes.STRING,
            },
            dien_giai: {
                type: DataTypes.TEXT,
            },
            tien_truoc_thue: {
                type: DataTypes.DECIMAL,
            },
            tien_thue: {
                type: DataTypes.DECIMAL,
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
            tableName: "donMuaHang",
            schema: SCHEMA,
        }
    );
    return DonMuaHang;
};
