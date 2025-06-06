import { DataTypes } from "sequelize";
import { config } from "dotenv"; config();

export const createKHKDModel = async (sequelize) => {
    const KHKD = sequelize.define(
        "khkd",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            userClass: {
                type: DataTypes.JSONB,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            year: {
                type: DataTypes.INTEGER,
            },
            info :{
                type: DataTypes.JSONB,
            },
            userCreated: {
                type: DataTypes.STRING,
            },
            created_at: {
                type: DataTypes.DATE,
                defaultValue: DataTypes.NOW,
            },
            updated_at: {
                type: DataTypes.DATE,
                defaultValue: DataTypes.NOW,
            },
            deleted_at: {
                type: DataTypes.DATE,
                allowNull: true,
            },
            show: {
                type: DataTypes.BOOLEAN,
                defaultValue: true,
            },
        },
        {
            tableName: "khkd",
            schema: process.env.SCHEMA,
        }
    );
    return KHKD;
};
