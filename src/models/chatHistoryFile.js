import {DataTypes} from "sequelize";
import {config} from "dotenv";

config();

export const createChatHistoryFileModel = async (sequelize) => {
    const ChatHistoryFile = sequelize.define(
        "chatHistoryFile",
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            user_email: {
                type: DataTypes.STRING,
            },
            id_file: {
                type: DataTypes.INTEGER,
            },

            question: {
                type: DataTypes.TEXT,
            },
            answer: {
                type: DataTypes.TEXT,
            },
            question_time: {
                type: DataTypes.STRING,
            },
            answer_time: {
                type: DataTypes.STRING,
            },
            info: {
                type: DataTypes.JSONB,
            },
            created_at: {
                type: DataTypes.STRING,
            }
        },
        {
            tableName: "chatHistoryFile",
            schema: process.env.SCHEMA,
        }
    );
    return ChatHistoryFile;
};
