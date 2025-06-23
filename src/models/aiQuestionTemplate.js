import { DataTypes } from "sequelize";
import { config } from "dotenv"; config();

export const createAiQuestionTemplateModel = async (sequelize) => {
    const AiQuestionTemplate = sequelize.define(
        "aiQuestionTemplate",
        {
            id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true,
            },
            status: {
                type: DataTypes.STRING,
            },
            category: {
                type: DataTypes.STRING,
            },
            question: {
                type: DataTypes.TEXT,
            },
            created_at: {
                type: DataTypes.STRING,
            },
            description: {
                type: DataTypes.TEXT,
            },
            user_create: {
                type: DataTypes.STRING,
            },
            autoCreateChart: {
                type: DataTypes.BOOLEAN,
                defaultValue: false,
            },
            show: {
                type: DataTypes.BOOLEAN,
                defaultValue: true,
            },
            used_time: {
                type: DataTypes.STRING,
            },
            id_template: {
                type: DataTypes.INTEGER,
                allowNull: true,
            },
            quest_setting: {
                type: DataTypes.JSONB,
            }
        },
        {
            tableName: "aiQuestionTemplate",
            schema: process.env.SCHEMA,
        }
    );
    return AiQuestionTemplate;
}; 