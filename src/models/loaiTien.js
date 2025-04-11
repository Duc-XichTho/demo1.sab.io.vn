import {config} from "dotenv"; config();
import {DataTypes} from 'sequelize';

export const createLoaiTienModel = async (sequelize) => {
    const LoaiTien = sequelize.define(
        'loaiTien',
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            dauKy : {
                type: DataTypes.DECIMAL,
            },
            code : {
                type: DataTypes.STRING,
            },
            name: {
                type: DataTypes.STRING,
            },
            bieu_tuong: {
                type: DataTypes.STRING,
            },
            company : {
                type: DataTypes.STRING,
            },
            year : {
                type: DataTypes.STRING,
            },
            ma_loai_tien: {
                type: DataTypes.STRING,
            },
            ty_gia: {
                type: DataTypes.DECIMAL,
            },
            ngay_cap_nhat: {
                type: DataTypes.DATEONLY,
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
        },
        {
            schema: process.env.SCHEMA,
            tableName: 'loaiTien',
        }
    );
    return LoaiTien;
};
