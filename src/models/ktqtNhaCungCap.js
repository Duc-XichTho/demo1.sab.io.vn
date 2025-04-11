import {DataTypes} from "sequelize";
import {config} from "dotenv"; config();

export const createKtqtNhaCungCapModel = async (sequelize) => {
    const KtqtNhaCungCap = sequelize.define(
        "ktqtNhaCungCap",
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
            ma_ncc: {
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
            dien_thoai: {
                type: DataTypes.STRING,
            },
            nguoi_lien_he: {
                type: DataTypes.TEXT,
            },
            dieu_khoan_tt: {
                type: DataTypes.TEXT,
            },
            nhom_ncc: {
                type: DataTypes.TEXT,
            },
            hinh_thuc_thanh_toan: {
                type: DataTypes.TEXT,
            },
            han_muc_cong_no: {
                type: DataTypes.DECIMAL,
            },
            tk_ngan_hang: {
                type: DataTypes.TEXT
            },
            san_pham_cung_cap: {
                type: DataTypes.JSONB
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
            tableName: "ktqtNhaCungCap",
            schema: process.env.SCHEMA,
        }
    );
    return KtqtNhaCungCap;
};
