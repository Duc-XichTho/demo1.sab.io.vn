import {DataTypes} from "sequelize";
import {SCHEMA} from './Z_CONST.js';

export const createChiTietPhieuGiaoHangModel = async (sequelize) => {
    const ChiTietPhieuGiaoHang = sequelize.define(
        " chiTietPhieuGiaoHang",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            id_phieu_giao_hang:{
                type: DataTypes.INTEGER,
                defaultValue: null
            },
            id_hang_hoa: {
                type: DataTypes.INTEGER,
            },
            so_luong: {
                type: DataTypes.INTEGER,
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
            tableName: "chiTietPhieuGiaoHang",
            schema: SCHEMA,
        }
    );
    return ChiTietPhieuGiaoHang;
};
