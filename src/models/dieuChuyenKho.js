import {DataTypes} from "sequelize";
import {SCHEMA} from './Z_CONST.js';

export const createDieuChuyenKhoModel = async (sequelize) => {
    const DieuChuyenKho = sequelize.define(
        "dieuChuyenKho",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            gom:{
                type: DataTypes.STRING,
            },
            id_card_create:{
                type: DataTypes.INTEGER,
                defaultValue: null
            },
            code: {
                type: DataTypes.STRING,
            },
            id_nhan_vien: {
                type: DataTypes.INTEGER,
            },
            ngay: {
                type: DataTypes.STRING,
            },
            id_kho_nguon: {
                type: DataTypes.INTEGER,
            },
            id_kho_dich: {
                type: DataTypes.INTEGER,
            },
            company: {
                type: DataTypes.STRING,
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
            lenh_san_xuat: {
                type: DataTypes.JSONB,
            },
            show: {
                type: DataTypes.BOOLEAN,
                defaultValue: true,
            },
        },
        {
            tableName: "dieuChuyenKho",
            schema: SCHEMA,
        }
    );
    return DieuChuyenKho;
};
