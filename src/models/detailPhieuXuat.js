import {DataTypes} from "sequelize";
import {config} from "dotenv"; config();

export const createDetailPhieuXuatModel = async (sequelize) => {
    const DetailPhieuXuat = sequelize.define(
        "detailPhieuXuat",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            code: {
                type: DataTypes.STRING,
            },
            id_phieu_xuat: {
                type: DataTypes.INTEGER,
            },
            id_hang_hoa: {
                type: DataTypes.INTEGER,
            },
            id_kho: {
                type: DataTypes.INTEGER,
            },
            id_lo: {
                type: DataTypes.INTEGER,
            },
            so_luong: {
                type: DataTypes.INTEGER,
            },
            gia_xuat: {
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
            tableName: "detailPhieuXuat",
            schema: process.env.SCHEMA,
        }
    );
    return DetailPhieuXuat;
};
