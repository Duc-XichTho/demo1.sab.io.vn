import { SCHEMA } from './Z_CONST.js';
import {DataTypes} from 'sequelize';

export const createKTQTKmfModel = async (sequelize) => {
    const KTQTKmf = sequelize.define(
        'ktqtKmf',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            code: {
                type: DataTypes.STRING,
            },
            name: {
                type: DataTypes.STRING,
            },
            mo_ta: {
                type: DataTypes.STRING,
            },year: {
                type: DataTypes.STRING,
            },
            loai_chi_phi: {
                type: DataTypes.TEXT,
            },
            nhom_kmcp: {
                type: DataTypes.STRING,
            },
            tk_hach_toan: {
                type: DataTypes.JSONB,
            },
            kiem_soat_ngan_sach: {
                type: DataTypes.STRING,
            },
            duoc_khau_tru_thue: {
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
            dp: {
                type: DataTypes.TEXT,
            },
            dp1: {
                type: DataTypes.TEXT,
            },
            dp2: {
                type: DataTypes.TEXT,
            },
            dp3: {
                type: DataTypes.TEXT,
            },
            company: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            createAt: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            group: {
                type: DataTypes.TEXT,
                allowNull: true,
            },

            show: {
                type: DataTypes.BOOLEAN,
                defaultValue: true,
            },
        },
        {
            schema: SCHEMA,
            tableName: 'ktqtKmf',
        }
    );
    return KTQTKmf;
};
