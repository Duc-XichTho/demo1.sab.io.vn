import {DataTypes} from "sequelize";
import {SCHEMA} from './Z_CONST.js';

export const createKhoModel = async (sequelize) => {
    const Kho = sequelize.define(
        "kho",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            code: {
                type: DataTypes.STRING,
            },
            company: {
                type: DataTypes.STRING,
            },
            year: {
                type: DataTypes.STRING,
            },
            ma_kho: {
                type: DataTypes.TEXT,
            },
            name: {
                type: DataTypes.TEXT,
            },
            dia_chi: {
                type: DataTypes.TEXT,
            },
            nguoi_phu_trach: {
                type: DataTypes.TEXT,
            },
            loai_kho: {
                type: DataTypes.TEXT,
            },
            tk_kho: {
                type: DataTypes.TEXT,
            },
            ghi_chu: {
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
            tableName: "kho",
            schema: SCHEMA,
        }
    );
    return Kho;
};
