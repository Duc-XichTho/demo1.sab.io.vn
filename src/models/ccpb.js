import {DataTypes} from "sequelize";
import {config} from "dotenv"; config();

export const createCCPBModel = async (sequelize) => {
    const CCPB = sequelize.define(
        "ccpb",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            code: {
                type: DataTypes.STRING,
            },
            name: {
                type: DataTypes.STRING,
            },
            PB: {
                type: DataTypes.JSONB,
            },
            type: {
                type: DataTypes.STRING,
            },
            company: {
                type: DataTypes.STRING,
            },
            fillOption: {
                type: DataTypes.STRING,
            },
            dp1: {
                type: DataTypes.TEXT,
            },
            dp2: {
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
            tableName: "ccpb",
            schema: process.env.SCHEMA,
        }
    );
    return CCPB;
};
