import {DataTypes} from "sequelize";
import {SCHEMA} from './Z_CONST.js';

export const createKenhModel = async (sequelize) => {
    const Kenh = sequelize.define(
        "kenh",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            group: {
                type: DataTypes.TEXT,
            },

            year: {
                type: DataTypes.STRING,
            },
            code: {
                type: DataTypes.STRING,
            },
            name: {
                type: DataTypes.STRING,
            },
            mo_ta: {
                type: DataTypes.TEXT,
            },
            chu_thich: {
                type: DataTypes.TEXT,
            },
            trang_thai: {
                type: DataTypes.STRING,
            },
            company: {
                type: DataTypes.STRING,
            },
            unit_code: {
                type: DataTypes.STRING,
            },
            dp: {
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
            tableName: "kenh",
            schema: SCHEMA,
        }
    );
    return Kenh;
};
