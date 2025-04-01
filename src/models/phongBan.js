import {SCHEMA} from './Z_CONST.js';
import {DataTypes} from 'sequelize';

export const createPhongBanModel = async (sequelize) => {
    const PhongBan = sequelize.define(
        'phongBan',
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            code: {
                type: DataTypes.STRING,
            },
            name: {
                type: DataTypes.STRING,
            },
            company: {
                type: DataTypes.STRING,
            },
            year: {
                type: DataTypes.STRING,
            },
            thuoc_ve_BU: {
                type: DataTypes.INTEGER,
            },
            cap_quan_ly: {
                type: DataTypes.STRING,
            },
            code_nhan_vien: {
                type: DataTypes.STRING,
            },
            mo_ta: {
                type: DataTypes.TEXT,
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
            schema: SCHEMA,
            tableName: 'phongBan',
        }
    );
    return PhongBan;
};
