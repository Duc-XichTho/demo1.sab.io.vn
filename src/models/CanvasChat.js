import {
    DataTypes
} from "sequelize";
import {
    SCHEMA
} from './Z_CONST.js';

export const createCanvasChatModel = async (sequelize) => {
    const CanvasChat = sequelize.define(
        "canvas_chat", {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            canvasDataId: {
                type: DataTypes.INTEGER,
            },
            userId: {
                type: DataTypes.STRING,
            },
            question: {
                type: DataTypes.TEXT,
            },
            answer: {
                type: DataTypes.TEXT,
            },
            show: {
                type: DataTypes.BOOLEAN,
                defaultValue: true,
            },
        }, {
            schema: SCHEMA,
            tableName: "canvas_chat",
            timestamps: false,
        }
    );
    return CanvasChat;
};