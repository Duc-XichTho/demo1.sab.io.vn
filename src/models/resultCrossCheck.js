import {DataTypes} from "sequelize";
import {config} from "dotenv"; config();

export const createResultCrossCheckModel = async (sequelize) => {
    const ResultCrossCheck = sequelize.define(
        "resultCrossCheck",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            id_crossCheck : {
                type: DataTypes.STRING,
            },
            result : {
                type: DataTypes.JSONB,
            },
            isErr: {
                type: DataTypes.TEXT,
            },
            trang_thai: {
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
            tableName: "resultCrossCheck",
            schema: process.env.SCHEMA,
        }
    );
    return ResultCrossCheck;
};
