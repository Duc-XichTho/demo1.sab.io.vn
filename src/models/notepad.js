import { DataTypes } from "sequelize";
import {config} from "dotenv"; config();

export const createNotePadModel = async (sequelize) => {
    const NotePad = sequelize.define(
        "notepad",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            company: {
                type: DataTypes.STRING,
            },
            year: {
                type: DataTypes.STRING,
            },
            content: {
                type: DataTypes.TEXT,
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
            show: {
                type: DataTypes.BOOLEAN,
                defaultValue: true,
            },
        },
        {
            schema: process.env.SCHEMA,
            timestamps: false,
            freezeTableName: true,
        }
    );
    return NotePad;
};