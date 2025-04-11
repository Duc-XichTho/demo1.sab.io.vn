import {DataTypes} from "sequelize";
import {config} from "dotenv"; config();

export const createPBLSXModel = async (sequelize) => {
    const PBLSX = sequelize.define(
        "pblsx",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            LSX: {
                type: DataTypes.TEXT,
            },
            PBSP: {
                type: DataTypes.JSONB,
            },
            ky: {
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
            tableName: "pblsx",
            schema: process.env.SCHEMA,
        }
    );
    return PBLSX;
};
