import {config} from "dotenv"; config();
import {DataTypes} from "sequelize";

export const createFileChildModel = async (sequelize) => {
    const FileChild = sequelize.define(
        "fileChild",
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            userClass : {
                type: DataTypes.JSONB,
            },
            tag_id: {
                type: DataTypes.STRING,
            },
            name: {
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
            show: {
                type: DataTypes.BOOLEAN,
                defaultValue: true,
            },
        },
        {
            schema: process.env.SCHEMA,
            tableName: "fileChild",
            timestamps: false,
        }
    );

    return FileChild;
};
