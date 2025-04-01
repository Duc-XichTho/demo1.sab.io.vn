import {SCHEMA} from './Z_CONST.js';
import {DataTypes} from 'sequelize';

export const createKTQTProductModel = async (sequelize) => {
    const KTQTProduct = sequelize.define(
        'ktqtProduct',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            group3: {
                type: DataTypes.TEXT,
            },
            group2: {
                type: DataTypes.TEXT,
            },
            group1: {
                type: DataTypes.TEXT,
            },
            code: {
                type: DataTypes.TEXT,
            },
            group: {
                type: DataTypes.TEXT,
            },
            name: {
                type: DataTypes.TEXT,
            },
            id_nha_cung_cap: {
                type: DataTypes.INTEGER,
            },
            dauKy: {
                type: DataTypes.DECIMAL,
            },
            year: {
                type: DataTypes.STRING,
            },
            ma_hh: {
                type: DataTypes.TEXT,
            },
            dvt: {
                type: DataTypes.TEXT,
            },
            loai: {
                type: DataTypes.STRING,
            },
            nhom_hh: {
                type: DataTypes.TEXT,
            },
            thue_vat: {
                type: DataTypes.DECIMAL,
            },
            gia_nhap: {
                type: DataTypes.DECIMAL,
            },
            gia_ban: {
                type: DataTypes.DECIMAL,
            },
            don_vi: {
                type: DataTypes.STRING,
            },
            tk_doanh_thu: {
                type: DataTypes.TEXT,
            },
            tk_gia_von: {
                type: DataTypes.TEXT,
            },
            tk_hang_ton: {
                type: DataTypes.TEXT,
            },
            tkkt: {
                type: DataTypes.TEXT,
            },
            pp_tinh_gia: {
                type: DataTypes.TEXT,
            },
            theo_doi_ton: {
                type: DataTypes.STRING,
            },
            ton_toi_thieu: {
                type: DataTypes.STRING,
            },
            ton_toi_da: {
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
                type: DataTypes.TEXT,
                allowNull: true,
            },
            unit_code: {
                type: DataTypes.TEXT,
                allowNull: true,
            },
            createAt: {
                type: DataTypes.TEXT,
                allowNull: true,
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
        }
    );
    return KTQTProduct;
};
