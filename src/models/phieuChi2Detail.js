import {DataTypes} from "sequelize";
import {config} from "dotenv"; config();

export const createPhieuChi2DetailModel = async (sequelize) => {
    const PhieuChi2Detail = sequelize.define(
        "PhieuChi2Detail",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            id_phieu_chi: {
                type: DataTypes.INTEGER,
            },
            id_hang_hoa: {
                type: DataTypes.INTEGER,
            },
            code_hang_hoa: {
                type: DataTypes.STRING,
            },
            name_hang_hoa: {
                type: DataTypes.STRING,
            },
            so_luong: {
                type: DataTypes.INTEGER,
            },
            chiet_khau: {
                type: DataTypes.INTEGER,
            },
            gia_ban: {
                type: DataTypes.DECIMAL,
            },
            tong_tien: {
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
            tien_nguyen_te: {
                type: DataTypes.TEXT,
            },
            tong_tien_nguyen_te: {
                type: DataTypes.TEXT,
            },
            ty_gia: {
                type: DataTypes.TEXT,
            },
        },
        {
            tableName: "phieuChi2Detail",
            schema: process.env.SCHEMA,
        }
    );
    return PhieuChi2Detail;
};
