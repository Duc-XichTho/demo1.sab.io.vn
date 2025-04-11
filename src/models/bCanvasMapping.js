import {DataTypes} from "sequelize";
import {config} from "dotenv"; config();

export const createBCanvasMappingModel = async (sequelize) => {
    const BCanvasMapping = sequelize.define(
        "bCanvasMapping",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            id_DataOriginal : {
                type: DataTypes.INTEGER,
            },
            data : {
                type: DataTypes.JSONB,
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
            tableName: "bCanvasMapping",
            schema: process.env.SCHEMA,
        }
    );
    return BCanvasMapping;
};
