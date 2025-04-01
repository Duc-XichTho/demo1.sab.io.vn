import {DataTypes} from "sequelize";
import {SCHEMA} from './Z_CONST.js';

export const createB0123Model = async (sequelize) => {
    const B0123 = sequelize.define(
        "b0123",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            code: {
                type: DataTypes.TEXT,
            },
            name : {
                type: DataTypes.TEXT,
            },
            level : {
                type: DataTypes.TEXT,
            },
            parent: {
                type: DataTypes.TEXT,
            },
            children: {
                type: DataTypes.JSONB,
            },
            BC: {
                type: DataTypes.STRING,
            },
            formula : {
                type: DataTypes.STRING,
            },
            note : {
                type: DataTypes.TEXT,
            },
            isNegative : {
                type: DataTypes.BOOLEAN,
            },
            loai: {
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
            show: {
                type: DataTypes.BOOLEAN,
                defaultValue: true,
            },
        },
        {
            tableName: "b0123",
            schema: SCHEMA,
        }
    );
    return B0123;
};
