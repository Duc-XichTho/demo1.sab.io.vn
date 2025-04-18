import {DataTypes} from "sequelize";
import {config} from "dotenv"; config();

export const createChiTietPhieuThuModel = async (sequelize) => {
    const ChiTietPhieuThu = sequelize.define(
        " chiTietPhieuThu",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            id_phieu_thu:{
                type: DataTypes.INTEGER,
                defaultValue: null
            },
            id_hang_hoa: {
                type: DataTypes.INTEGER,
            },
            so_luong: {
                type: DataTypes.INTEGER,
            },
            chiet_khau: {
                type: DataTypes.INTEGER,
            },
            don_gia: {
                type: DataTypes.DECIMAL,
            },
            tong_tien: {
                type: DataTypes.DECIMAL,
            },
            thue_gtgt: {
                type: DataTypes.DECIMAL,
            },

            company: {
                type: DataTypes.STRING,
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
            tien_nguyen_te : {
                type: DataTypes.TEXT,
            },
            tong_tien_nguyen_te : {
                type: DataTypes.TEXT,
            },
            ty_gia : {
                type: DataTypes.TEXT,
            },
        },
        {
            tableName: "chiTietPhieuThu",
            schema: process.env.SCHEMA,
        }
    );
    return ChiTietPhieuThu;
};
