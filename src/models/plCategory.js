import {DataTypes} from "sequelize";
import {SCHEMA} from './Z_CONST.js';

export const createPlCategoryModel = async (sequelize) => {
    const PlCategory = sequelize.define(
        "plCategory",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            ma_km: {
                type: DataTypes.STRING,
            },
            ten_km: {
                type: DataTypes.STRING,
            },
            nhom: {
                type: DataTypes.STRING,
            },
            tk_mac_dinh: {
                type: DataTypes.STRING,
            },
            ben_dinh_khoan: {
                type: DataTypes.STRING,
            },
            trang_thai: {
                type: DataTypes.STRING,
            },
            cau_truc: {
                type: DataTypes.JSONB,
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
            tableName: "plCategory",
            schema: SCHEMA,
        }
    );
    return PlCategory;
};
