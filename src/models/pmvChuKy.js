import {DataTypes} from "sequelize";
import {SCHEMA} from './Z_CONST.js';

export const createPMVChuKyModel = async (sequelize) => {
    const PMVChuKy = sequelize.define(
        "pmvChuKy",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            name: {
                type: DataTypes.STRING,
            },
            config_period: {
                type: DataTypes.JSONB,
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
            tableName: "pmvChuKy",
            schema: SCHEMA,
        }
    );
    return PMVChuKy;
};
