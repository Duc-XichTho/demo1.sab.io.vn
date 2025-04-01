import { DataTypes } from "sequelize";
import { SCHEMA } from "./Z_CONST.js";

export const createTagModel = async (sequelize) => {
    const Tag = sequelize.define(
        "tag",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            name: {
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
            tableName: "tag",
            schema: SCHEMA,
            timestamps: false,
        }
    );
    return Tag;
};
