import { DataTypes } from "sequelize";
import { config } from "dotenv"; config();

export const createAiChatHistoryModel = async (sequelize) => {
    const AiChatHistory = sequelize.define(
        "aiChatHistory",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            model2: {
                type: DataTypes.STRING,
            },
            model3: {
                type: DataTypes.STRING,
            },
            token2: {
                type: DataTypes.STRING,
            },
            token3: {
                type: DataTypes.STRING,
            },
            chartData: {
                type: DataTypes.JSONB,
            },
            chartConfig: {
                type: DataTypes.JSONB,
            },
            userCreated: {
                type: DataTypes.STRING,
            },
            id_chain: {
                type: DataTypes.INTEGER,
            },
            quest: {
                type: DataTypes.TEXT,
            },
            result: {
                type: DataTypes.TEXT,
            },
            create_at: {
                type: DataTypes.STRING,
            },
            show: {
                type: DataTypes.BOOLEAN,
                defaultValue: true,
            },
            model: {
                type: DataTypes.STRING,
            },
            more_info: {
                type: DataTypes.JSONB,
            }
        },
        {
            tableName: "aiChatHistory",
            schema: process.env.SCHEMA,
        }
    );
    return AiChatHistory;
};
