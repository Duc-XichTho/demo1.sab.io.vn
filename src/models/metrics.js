import {DataTypes} from "sequelize";
import {config} from "dotenv"; config();

export const createMetricsModel = async (sequelize) => {
    const Metrics = sequelize.define(
        "metrics",
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
            nganhReal: {
                type: DataTypes.INTEGER,
            },
            user_class: {
                type: DataTypes.JSONB,
                defaultValue:[]
            },
            dv_lien_quan: {
                type: DataTypes.JSONB,
                defaultValue:[]
            },
            bo: {
                type: DataTypes.JSONB,
                defaultValue:[]
            },
            data_mapping: {
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
            tableName: "metrics",
            schema: process.env.SCHEMA,
        }
    );
    return Metrics;
};
