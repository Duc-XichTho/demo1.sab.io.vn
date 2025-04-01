import {DataTypes} from "sequelize";
import {SCHEMA} from './Z_CONST.js';

export const createBusinessUnitModel = async (sequelize) => {
    const BusinessUnit = sequelize.define(
        "businessUnit",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            dauKy : {
                type: DataTypes.DECIMAL,
            },
            code: {
                type: DataTypes.STRING,
            },
            company: {
                type: DataTypes.STRING,
            },
            name: {
                type: DataTypes.STRING,
            },
            mo_ta : {
                type: DataTypes.TEXT,
            },
            cap: {
                type: DataTypes.STRING,
            },
            truong_dv: {
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
            tableName: "businessUnit",
            schema: SCHEMA,
        }
    );
    return BusinessUnit;
};
