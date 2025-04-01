import {DataTypes} from "sequelize";
import {SCHEMA} from './Z_CONST.js';

export const createDetailPhieuNhapModel = async (sequelize) => {
    const DetailPhieuNhap = sequelize.define(
        "detailPhieuNhap",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            code: {
                type: DataTypes.STRING,
            },
            id_phieu_nhap: {
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
            gia_nhap: {
                type: DataTypes.DECIMAL,
            },
            company: {
                type: DataTypes.STRING,
            },
            trang_thai: {
                type: DataTypes.BOOLEAN,
            },
            id_nha_cung_cap: {
                type: DataTypes.INTEGER,
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
            tableName: "detailPhieuNhap",
            schema: SCHEMA,
        }
    );
    return DetailPhieuNhap;
};

