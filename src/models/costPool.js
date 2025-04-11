import {DataTypes} from "sequelize";
import {config} from "dotenv"; config();

export const createCostPoolModel = async (sequelize) => {
    const CostPool = sequelize.define(
        "costPool",
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
            company: {
                type: DataTypes.STRING,
            },
            year: {
                type: DataTypes.STRING,
            },
            cost_driver: {
                type: DataTypes.STRING,
            },

            type: {
                type: DataTypes.STRING,
            },

            trang_thai: {
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
            tableName: "costPool",
            schema: process.env.SCHEMA,
        }
    );
    return CostPool;
};
