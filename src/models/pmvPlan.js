import {DataTypes} from "sequelize";
import {SCHEMA} from './Z_CONST.js';

export const createPMVPlanModel = async (sequelize) => {
    const PMVPlan = sequelize.define(
        "pmvPlan",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            name: {
                type: DataTypes.STRING,
            },
            version: {
                type: DataTypes.STRING,
            },
            track_sku_details: {
                type: DataTypes.STRING,
            },
            date_from: {
                type: DataTypes.STRING,
            },
            date_to: {
                type: DataTypes.STRING,
            },
            bang: {
                type: DataTypes.STRING,
            },
            cot: {
                type: DataTypes.STRING,
            },
            year: {
                type: DataTypes.STRING,
            },
            company: {
                type: DataTypes.STRING,
            },
            duyet: {
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
            tableName: "pmvPlan",
            schema: SCHEMA,
        }
    );
    return PMVPlan;
};
