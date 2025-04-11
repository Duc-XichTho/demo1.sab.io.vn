import {DataTypes} from "sequelize";
import {config} from "dotenv"; config();

export const createPMVSettingKHModel = async (sequelize) => {
    const PMVSettingKH = sequelize.define(
        "pmvSettingKH",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            name: {
                type: DataTypes.TEXT,
            },
            data: {
                type: DataTypes.JSONB,
            },
            year: {
                type: DataTypes.STRING,
            },
            company: {
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
            isUse: {
                type: DataTypes.BOOLEAN,
                defaultValue: true,
            },
            show: {
                type: DataTypes.BOOLEAN,
                defaultValue: true,
            },
        },
        {
            tableName: "pmvSettingKH",
            schema: process.env.SCHEMA,
        }
    );
    return PMVSettingKH;
};
