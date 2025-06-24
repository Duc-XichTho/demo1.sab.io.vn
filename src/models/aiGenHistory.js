import { DataTypes } from "sequelize";
import { config } from "dotenv"; config();

export const createAiGenHistoryModel = async (sequelize) => {
    const AiGenHistory = sequelize.define(
        "aiGenHistory",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            audioUrl: {
                type: DataTypes.TEXT,
            },
            imageUrl: {
                type: DataTypes.TEXT,
            },
            imageUrls: {
                type: DataTypes.JSONB,
            },
            prompt: {
                type: DataTypes.TEXT,
            },
            AIGenConfigId: {
                type: DataTypes.STRING,
            },
            userCreated: {
                type: DataTypes.STRING,
            },
            create_at: {
                type: DataTypes.STRING,
            },
            settings: {
                type: DataTypes.JSONB,
            },
            anwser: {
                type: DataTypes.TEXT,
            },
            show: {
                type: DataTypes.BOOLEAN,
                defaultValue: true,
            }
        },
        {
            tableName: "aiGenHistory",
            schema: process.env.SCHEMA,
        }
    );
    return AiGenHistory;
};
