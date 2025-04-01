import {SCHEMA} from './Z_CONST.js';
import {DataTypes} from 'sequelize';

export const createKhoanMucThuChiTienModel = async (sequelize) => {
    const KhoanMucThuChiTien = sequelize.define(
        'khoanMucThuChiTien',
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
            ma_khoan_muc: {
                type: DataTypes.STRING
            },
            ten_khoan_muc: {
                type: DataTypes.STRING,
            },
            loai: {
                type: DataTypes.STRING,
            },
            nhom_khoan_muc: {
                type: DataTypes.STRING,
            },
            tai_khoan_tien: {
                type: DataTypes.STRING,
            },
            trang_thai_su_dung: {
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
            schema: SCHEMA,
            tableName: 'khoanMucThuChiTien',
        }
    );
    return KhoanMucThuChiTien;
};
