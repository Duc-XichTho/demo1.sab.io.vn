import { DataTypes } from "sequelize";
import {config} from "dotenv"; config();

export const createCheckListModel = async (sequelize) => {
    const CheckList = sequelize.define(
        "checklist",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            options: {
                type: DataTypes.JSONB,
            },
            sub_step_id: {
                type: DataTypes.INTEGER,
            },
            card_id: {
                type: DataTypes.INTEGER,
            },
            position: {
                type: DataTypes.INTEGER,
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
        },
        {
            schema: process.env.SCHEMA,
            timestamps: false,
            freezeTableName: true,
        }
    );
    return CheckList;
};