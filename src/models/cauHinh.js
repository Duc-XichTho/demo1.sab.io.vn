import {DataTypes} from "sequelize";
import {SCHEMA} from './Z_CONST.js';

export const createCauHinhModel = async (sequelize) => {
    const CauHinh = sequelize.define(
        "cauHinh",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            code : {
                type: DataTypes.STRING,
            },
            field : {
                type: DataTypes.STRING,
            },
            value : {
                type: DataTypes.STRING,
            },
            company : {
                type: DataTypes.STRING,
            },
            chu_thich : {
                type: DataTypes.TEXT,
            },
            year : {
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
            tableName: "cauHinh",
            schema: SCHEMA,
        }
    );
    return CauHinh;
};
