import { DataTypes } from "sequelize";
import {config} from "dotenv"; config();

export const createExternalChatHistoryModel = async (sequelize) => {
    const ExternalChatHistory = sequelize.define(
        "ExternalChatHistory",
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            user_email: {
                type: DataTypes.STRING,
            },
            question: {
                type: DataTypes.TEXT,
            },
            answer: {
                type: DataTypes.TEXT,
            },
            similar_passages: {
                type: DataTypes.JSONB,
            },
            question_time: {
                type: DataTypes.STRING,
            },
            answer_time: {
                type: DataTypes.STRING,
            },
            created_at:{
                type: DataTypes.STRING,
            }
        },
        {
            tableName: "external_chat_history",
            schema: process.env.SCHEMA,
            timestamps: false,
            indexes: [
                {
                    fields: ['user_email']
                },
                {
                    fields: ['question_time']
                },
                {
                    fields: ['answer_time']
                }
            ]
        }
    );

    return ExternalChatHistory;
}; 