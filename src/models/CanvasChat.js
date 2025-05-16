import {
    DataTypes
} from "sequelize";
import {config} from "dotenv"; config();

export const createCanvasChatModel = async (sequelize) => {
    const CanvasChat = sequelize.define(
        "canvas_chat",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            typeKHKD: {
                type: DataTypes.TEXT,
            },
            update_at: {
                type: DataTypes.TEXT,
            },
            idKHKD : {
                type: DataTypes.INTEGER,
            },
            idCanvasContainer : {
                type: DataTypes.INTEGER,
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
            schema: process.env.SCHEMA,
            tableName: "canvas_chat",
            timestamps: false,
        }
    );
    return CanvasChat;
};
