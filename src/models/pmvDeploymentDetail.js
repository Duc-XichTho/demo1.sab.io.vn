import {DataTypes} from "sequelize";
import {SCHEMA} from './Z_CONST.js';

export const createPMVDeploymentDetailModel = async (sequelize) => {
    const PMVDeploymentDetail = sequelize.define(
        "pmvDeploymentDetail",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            deployment_id: {
                type: DataTypes.INTEGER,
            },
            plan_id: {
                type: DataTypes.INTEGER,
            },
            data: {
                type: DataTypes.JSONB,
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
            tableName: "pmvDeploymentDetail",
            schema: SCHEMA,
        }
    );
    return PMVDeploymentDetail;
};
