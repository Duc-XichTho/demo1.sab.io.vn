import {config} from "dotenv"; config();
import {DataTypes} from 'sequelize';

export const createKTQTKmnsModel = async (sequelize) => {
    const KTQTKmns = sequelize.define(
        'ktqtKmns',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            mo_ta: {
                type: DataTypes.STRING,
            },
            name: {
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
            year: {
                type: DataTypes.STRING,
            },
            ma_kmtc: {
                type: DataTypes.TEXT,
            },
            loai: {
                type: DataTypes.TEXT,
            },
            phan_loai: {
                type: DataTypes.STRING,
            },
            tinh_chat: {
                type: DataTypes.STRING,
            },
            nhom_kmtc: {
                type: DataTypes.STRING,
            },
            tk_hach_toan: {
                type: DataTypes.JSONB,
            },
            yeu_cau_duyet: {
                type: DataTypes.STRING,
            },
            han_muc_duyet: {
                type: DataTypes.DECIMAL,
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
            schema: process.env.SCHEMA,
            tableName: 'ktqtKmns',
        }
    );
    return KTQTKmns;
};
