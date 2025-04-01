import {SCHEMA} from "./Z_CONST.js";
import {DataTypes} from "sequelize";

export const createFileNotePadModel = async (sequelize) => {
    const FileNotePad = sequelize.define(
        "fileNote",
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            tag_id: {
                type: DataTypes.STRING,
            },
            userClass: {
                type: DataTypes.JSONB,
            },
            name: {
                type: DataTypes.STRING,
            },
            code: {
                type: DataTypes.STRING,
            },
            url: {
                type: DataTypes.TEXT,
            },
            type: {
                type: DataTypes.STRING,
            },
            table: {
                type: DataTypes.STRING,
            },
            tab: {
                type: DataTypes.STRING,
            },
            table_id: {
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
            position: {
                type: DataTypes.INTEGER,
            },
            show: {
                type: DataTypes.BOOLEAN,
                defaultValue: true,
            },
            plan_canvas: {
                type: DataTypes.JSONB,
            },
        },
        {
            schema: SCHEMA,
            tableName: "fileNote",
            timestamps: false,
        }
    );

    return FileNotePad;
};
