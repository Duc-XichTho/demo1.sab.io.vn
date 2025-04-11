import {DataTypes} from "sequelize";
import {config} from "dotenv"; config();

export const createBusinessObjectiveModel = async (sequelize) => {
    const BusinessObjective = sequelize.define(
        "businessObjective",
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
            mo_ta: {
                type: DataTypes.STRING,
            },
            code: {
                type: DataTypes.STRING,
            },
            nganh: {
                type: DataTypes.JSONB,
                defaultValue:[]
            },
            position: {
                type: DataTypes.INTEGER,
            },
            nganhReal: {
                type: DataTypes.INTEGER,
            },
            year: {
                type: DataTypes.INTEGER,
            },
            company: {
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
            metrics: {
                type: DataTypes.JSONB,
                defaultValue:[]
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
            tableName: "businessObjective",
            schema: process.env.SCHEMA,
        }
    );
    return BusinessObjective;
};
