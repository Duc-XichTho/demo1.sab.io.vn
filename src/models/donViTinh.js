import {SCHEMA} from './Z_CONST.js';
import {DataTypes} from 'sequelize';

export const createDonViTinhModel = async (sequelize) => {
    const DonViTinh = sequelize.define(
        'donViTinh',
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
            ma_don_vi_tinh: {
                type: DataTypes.STRING,
            },
            ten_don_vi_tinh: {
                type: DataTypes.STRING,
            },
            don_vi_tinh_chinh: {
                type: DataTypes.BOOLEAN,
            },
            ty_le_quy_doi: {
                type: DataTypes.DECIMAL,
            },
            created_at: {
                type: DataTypes.STRING,
            },
            updated_at: {
                type: DataTypes.STRING,
            },
            user_create: {
                type: DataTypes.STRING,
            },
            user_update: {
                type: DataTypes.STRING,
            },
            show: {
                type: DataTypes.BOOLEAN,
                defaultValue: true,
            },
        },
        {
            schema: SCHEMA,
            tableName: 'donViTinh',
        }
    );
    return DonViTinh;
};
