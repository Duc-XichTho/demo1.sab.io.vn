import {config} from "dotenv"; config();
import {DataTypes} from 'sequelize';

export const createDanhMucChungTuModel = async (sequelize) => {
    const DanhMucChungTu = sequelize.define(
        'danhMucChungTu',
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            code : {
                type: DataTypes.STRING,
            },
            company : {
                type: DataTypes.STRING,
            },
            year : {
                type: DataTypes.STRING,
            },
            loai_chung_tu: {
                type: DataTypes.STRING,
            },
            ky_hieu: {
                type: DataTypes.STRING,
            },
            quy_tac_danh_so: {
                type: DataTypes.STRING,

            },
            mau_in: {
                type: DataTypes.TEXT,
            },
            pham_vi: {
                type: DataTypes.TEXT,
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
            schema: process.env.SCHEMA,
            tableName: 'danhMucChungTu',
        }
    );
    return DanhMucChungTu;
};
