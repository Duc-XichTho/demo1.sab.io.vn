import {DataTypes} from "sequelize";
import {config} from "dotenv"; config();

export const createPBGV3Model = async (sequelize) => {
    const PBGV3 = sequelize.define(
        "pbgv3",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            KMF: {
                type: DataTypes.TEXT,
            },
            CCPBVV: {
                type: DataTypes.TEXT,
            },
            PBVV: {
                type: DataTypes.JSONB,
            },
            PBLSX: {
                type: DataTypes.JSONB,
            },
            CCPBLSX: {
                type: DataTypes.TEXT,
            },
            LSX: {
                type: DataTypes.TEXT,
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
            tableName: "pbgv3",
            schema: process.env.SCHEMA,
        }
    );
    return PBGV3;
};
