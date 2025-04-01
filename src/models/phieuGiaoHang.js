import {DataTypes} from "sequelize";
import {SCHEMA} from './Z_CONST.js';

export const createPhieuGiaoHangModel = async (sequelize) => {
    const PhieuGiaoHang = sequelize.define(
        " phieuGiaoHang",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            id_card_create:{
                type: DataTypes.INTEGER,
                defaultValue: null
            },
            list_id_phieu_xuat:{
                type: DataTypes.JSONB,
            },
            nguoi_giao_hang: {
                type: DataTypes.STRING,
            },
            nguoi_nhan_hang: {
                type: DataTypes.STRING,
            },
            dia_chi: {
                type: DataTypes.STRING,
            },
            thoi_gian_nhan: {
                type: DataTypes.STRING,
            },
            id_nhan_vien: {
                type: DataTypes.INTEGER,
            },
            id_khach_hang: {
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
            tableName: "phieuGiaoHang",
            schema: SCHEMA,
        }
    );
    return PhieuGiaoHang;
};
