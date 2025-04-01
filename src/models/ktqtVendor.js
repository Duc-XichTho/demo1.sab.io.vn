import { SCHEMA } from './Z_CONST.js';
import {DataTypes} from 'sequelize';

export const createKTQTVendorModel = async (sequelize) => {
    const KTQTVendor = sequelize.define(
        'ktqtVendor',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            name: {
                type: DataTypes.STRING,
            },
            dauKy: {
                type: DataTypes.DECIMAL,
            },
            code: {
                type: DataTypes.STRING,
            },
            dinh_danh: {
                type: DataTypes.STRING,
            },
            year: {
                type: DataTypes.STRING,
            },
            ma_kh: {
                type: DataTypes.TEXT,
            },

            ten_giao_dich: {
                type: DataTypes.TEXT,
            },
            mst: {
                type: DataTypes.TEXT,
            },
            dia_chi: {
                type: DataTypes.TEXT,
            },
            email: {
                type: DataTypes.STRING,
            },
            email_phu_trach: {
                type: DataTypes.STRING,
            },
            dien_thoai: {
                type: DataTypes.STRING,
            },
            nguoi_lien_he: {
                type: DataTypes.TEXT,
            },
            han_muc_cong_no: {
                type: DataTypes.DECIMAL,
            },
            nhom_kh: {
                type: DataTypes.TEXT,
            },
            dieu_khoan_tt: {
                type: DataTypes.TEXT,
            },
            phuong_thuc_tt: {
                type: DataTypes.TEXT,
            },
            nv_phu_trach: {
                type: DataTypes.STRING,
            },
            dp: {
                type: DataTypes.TEXT,
            },
            dp1: {
                type: DataTypes.TEXT,
            },
            dp2: {
                type: DataTypes.TEXT,
            },
            company: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            group: {
                type: DataTypes.TEXT,
                allowNull: true,
            },
            createAt: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            show: {
                type: DataTypes.BOOLEAN,
                defaultValue: true,
            },
        },
        {
            schema: SCHEMA,
            tableName: 'ktqtVendor',
        }
    );
    return KTQTVendor;
};
