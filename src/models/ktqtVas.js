import { SCHEMA } from './Z_CONST.js';
import {DataTypes} from 'sequelize';

export const createKTQTVasModel = async (sequelize) => {
    const generateMonthlyFields = (t) => {
        const fields = {};
        for (let i = 1; i <= 12; i++) {
            fields[`${t}${i}_no`] = {
                type: DataTypes.DECIMAL,
                allowNull: true,
            };
            fields[`${t}${i}_co`] = {
                type: DataTypes.DECIMAL,
                allowNull: true,
            };
            fields[`${t}${i}_ending_no`] = {
                type: DataTypes.DECIMAL,
                allowNull: true,
            };
            fields[`${t}${i}_ending_co`] = {
                type: DataTypes.DECIMAL,
                allowNull: true,
            };
            fields[`${t}${i}_ending_net`] = {
                type: DataTypes.DECIMAL,
                allowNull: true,
            };
        }
        return fields;
    };

    const KTQTVas = sequelize.define(
        'ktqtVas',
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            ma_tai_khoan: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            tai_khoan_cap: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            consol: {
                type: DataTypes.STRING,
            },
            ten_tai_khoan: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            ma_chi_tieu: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            phan_loai: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            chu_thich_tai_khoan: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            kc_no: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            kc_co: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            kc_net: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            kc_net2: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            t1_open_no: {
                type: DataTypes.DECIMAL,
                allowNull: true,
            },
            t1_open_co: {
                type: DataTypes.DECIMAL,
                allowNull: true,
            },
            t1_open_net: {
                type: DataTypes.DECIMAL,
                allowNull: true,
            },
            ...generateMonthlyFields('t'),
            business_unit: {
                type: DataTypes.STRING,
                allowNull: true,
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
            year: {
                type: DataTypes.STRING,
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
            tableName: 'ktqtVas',
            timestamps: false,
        }
    );
    return KTQTVas;
};
