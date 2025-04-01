import {DataTypes} from "sequelize";
import {SCHEMA} from './Z_CONST.js';

export const createLoModel = async (sequelize) => {
    const Lo = sequelize.define(
        "lo",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            code: {
                type: DataTypes.STRING,
            },
            name :  {
                type: DataTypes.STRING,
            },
            ngay : {
                type: DataTypes.DATEONLY,
            },
            id_nha_cung_cap : {
                type: DataTypes.INTEGER,
            },
            id_khach_hang : {
                type: DataTypes.INTEGER,
            },
            company: {
                type: DataTypes.STRING,
            },

            trang_thai: {
                type: DataTypes.BOOLEAN,
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
            tableName: "lo",
            schema: SCHEMA,
        }
    );
    return Lo;
};
