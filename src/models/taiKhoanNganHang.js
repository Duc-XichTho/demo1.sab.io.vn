import {DataTypes} from "sequelize";
import {SCHEMA} from './Z_CONST.js';

export const createTaiKhoanNganHangModel = async (sequelize) => {
    const TaiKhoanNganHang = sequelize.define(
        "taiKhoanNganHang",
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
            chu_tai_khoan : {
                type: DataTypes.STRING,
            },
            company: {
                type: DataTypes.STRING,
            },
            year: {
                type: DataTypes.STRING,
            },
            ma_nh: {
                type: DataTypes.TEXT,
            },

            so_tk: {
                type: DataTypes.TEXT,
            },
            chi_nhanh: {
                type: DataTypes.TEXT,
            },
            loai_tien: {
                type: DataTypes.TEXT,
            },
            tk_ke_toan: {
                type: DataTypes.TEXT,
            },
            so_du_toi_thieu: {
                type: DataTypes.DECIMAL,
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
            tableName: "taiKhoanNganHang",
            schema: SCHEMA,
        }
    );
    return TaiKhoanNganHang;
};
