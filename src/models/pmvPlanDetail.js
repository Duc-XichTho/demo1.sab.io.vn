import {DataTypes} from "sequelize";
import {SCHEMA} from './Z_CONST.js';

export const createPMVPlanDetailModel = async (sequelize) => {
    const PMVPlanDetail = sequelize.define(
        "pmvPlanDetail",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            plan_id: {
                type: DataTypes.INTEGER,
            },
            category_id: {
                type: DataTypes.INTEGER,
            },
            level: {
                type: DataTypes.STRING,
            },
            benchmark: {
                type: DataTypes.STRING,
            },
            target: {
                type: DataTypes.STRING,
            },

            year: {
                type: DataTypes.STRING,
            },
            company: {
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
            tableName: "pmvPlanDetail",
            schema: SCHEMA,
        }
    );
    return PMVPlanDetail;
};
