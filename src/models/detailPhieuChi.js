import {DataTypes} from "sequelize";
import {config} from "dotenv"; config();

export const createDetailPhieuChiModel = async (sequelize) => {
    const DetailPhieuChi = sequelize.define(
        " detailPhieuChi",
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
        },
        {
            tableName: "detailPhieuChi",
            schema: process.env.SCHEMA,
        }
    );
    return DetailPhieuChi;
};
