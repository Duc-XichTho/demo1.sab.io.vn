import { DataTypes } from "sequelize";
import { SCHEMA } from './Z_CONST.js';

export const createCardChecklistModel = async (sequelize) => {
    const CardChecklist = sequelize.define(
        "cardChecklist",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            card_id: {
                type: DataTypes.INTEGER,
            },
            content: {
                type: DataTypes.TEXT,
            },
            checklist_id: {
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
            show: {
                type: DataTypes.BOOLEAN,
                defaultValue: true,
            },
        },
        {
            tableName: "cardChecklist",
            timestamps: false,
        }
    );
    return CardChecklist;
};