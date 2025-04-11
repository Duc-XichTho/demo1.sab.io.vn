import {DataTypes} from "sequelize";
import {config} from "dotenv"; config();

export const createSupStepModel = async (sequelize) => {
    const SubStep = sequelize.define(
        "subStep",
        {
         id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            code : {
                type: DataTypes.STRING,
            },
            company : {
                type: DataTypes.STRING,
            },
            year : {
                type: DataTypes.STRING,
            },
            name: {
                type: DataTypes.TEXT,
            },
            step_id : {
                type: DataTypes.INTEGER,
            },
            position : {
                type: DataTypes.INTEGER,
            },
            subStepType : {
                type: DataTypes.STRING,
            },

            action_list: {
                type: DataTypes.JSONB,
                defaultValue: [],
            },
            value_create_dm:{
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
            tableName: "subStep",
            schema: process.env.SCHEMA,
        }
    );
    return SubStep;
};
