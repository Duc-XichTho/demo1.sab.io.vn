import {DataTypes} from "sequelize";
import {config} from "dotenv"; config();

export const createNganhRealModel = async (sequelize) => {
    const NganhReal = sequelize.define(
        "nganhReal",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            tabs: {
                type: DataTypes.JSONB,
                defaultValue:[]
            },
            name: {
                type: DataTypes.STRING,
            },
            code: {
                type: DataTypes.STRING,
            },
            mo_ta: {
                type: DataTypes.STRING,
            },
            position: {
                type: DataTypes.INTEGER,
            },
            user_class: {
                type: DataTypes.JSONB,
                defaultValue:[]
            },
            nganh: {
                type: DataTypes.JSONB,
                defaultValue:[]
            },
            year: {
                type: DataTypes.INTEGER,
            },
            company: {
                type: DataTypes.INTEGER,
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
            tableName: "nganhReal",
            schema: process.env.SCHEMA,
        }
    );
    return NganhReal;
};
