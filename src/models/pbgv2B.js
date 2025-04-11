import {DataTypes} from "sequelize";
import {config} from "dotenv"; config();

export const createPBGV2BModel = async (sequelize) => {
    const PBGV2B = sequelize.define(
        "pbgv2B",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            TK: {
                type: DataTypes.TEXT,
            },
            KMF: {
                type: DataTypes.TEXT,
            },
            W: {
                type: DataTypes.TEXT,
            },
            M: {
                type: DataTypes.TEXT,
            },
            trang_thai: {
                type: DataTypes.STRING,
            },
            ky: {
                type: DataTypes.TEXT,
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
            tableName: "pbgv2B",
            schema: process.env.SCHEMA,
        }
    );
    return PBGV2B;
};
