import {config} from "dotenv"; config();
import { DataTypes, Sequelize } from 'sequelize';

export const createConversationModel = async (sequelize) => {
    const Conversation = sequelize.define(
        'conversation',
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            code : {
                type: DataTypes.STRING,
            },
            company : {
                type: DataTypes.STRING,
            },
            year : {
                type: DataTypes.STRING,
            },
            user_email: {
                type: DataTypes.STRING,
                            },
            conversation: {
                type: DataTypes.JSONB,
            },
        },
        {
            schema: process.env.SCHEMA,
            tableName: 'conversation',
        }
    );
    return Conversation;
}