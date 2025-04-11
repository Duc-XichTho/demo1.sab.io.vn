import {DataTypes} from "sequelize";
import {config} from "dotenv"; config();

export const createPhieuThuModel = async (sequelize) => {
    const PhieuThu = sequelize.define(
        "phieuThu",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            phieu_lq: {
                type: DataTypes.JSONB,
            },
            code: {
                type: DataTypes.STRING,
            },
            company: {
                type: DataTypes.STRING,
            },
            id_card_create: {
                type: DataTypes.INTEGER,
            },
            id_hoa_don: {
                type: DataTypes.JSONB,
            },
            so_phieu: {
                type: DataTypes.STRING,
            },
            ngay_thu: {
                type: DataTypes.STRING,
            },
            hinh_thuc: {
                type: DataTypes.STRING,
            },
            don_hang_lien_quan: {
                type: DataTypes.TEXT,
            },
            nguoi_chuyen_tien: {
                type: DataTypes.STRING,
            },
            so_tien: {
                type: DataTypes.DECIMAL,
            },
            so_tien_bang_chu: {
                type: DataTypes.TEXT,
            },
            ly_do: {
                type: DataTypes.TEXT,
            },
            thu_cong_no: {
                type: DataTypes.STRING,
            },
            tien_nguyen_te : {
                type: DataTypes.TEXT,
            },
            ty_gia : {
                type: DataTypes.TEXT,
            },
            trang_thai: {
                type: DataTypes.STRING,
            },
            type: {
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
            tableName: "phieuThu",
            schema: process.env.SCHEMA,
        }
    );
    return PhieuThu;
};
