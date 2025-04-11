import {DataTypes} from "sequelize";
import {config} from "dotenv"; config();

export const createPMVDeploymentModel = async (sequelize) => {
    const PMVDeployment = sequelize.define(
        "pmvDeployment",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            setup_config: {
                type: DataTypes.JSONB,
            },
            plan_id: {
                type: DataTypes.INTEGER,
            },
            userClass: {
                type: DataTypes.TEXT,
            },
            config_period : {
                type: DataTypes.JSONB,
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
            tableName: "pmvDeployment",
            schema: process.env.SCHEMA,
        }
    );
    return PMVDeployment;
};
