import { DataTypes } from "sequelize";
import { config } from "dotenv"; config();

export const createAiFreeChatHistoryModel = async (sequelize) => {
    const AiFreeChatHistory = sequelize.define(
        "aiFreeChatHistory",
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
            tableName: "aiFreeChatHistory",
            schema: process.env.SCHEMA,
        }
    );
    return AiFreeChatHistory;
}; 