import {
    DataTypes
} from "sequelize";
import {config} from "dotenv"; config();

export const createCanvasBotModel = async (sequelize) => {
    const CanvasBot = sequelize.define(
        "canvas_bot",
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
            tempPacks: {
                type: DataTypes.JSON,
            },
            dataPacks: {
                type: DataTypes.JSON,
            },
            notePacks: {
                type: DataTypes.JSON,
            },
            filePacks: {
                type: DataTypes.JSON,
            },
            description: {
                type: DataTypes.TEXT,
            },
            model: {
                type: DataTypes.STRING,
            },
            system: {
                type: DataTypes.TEXT,
            },
            show: {
                type: DataTypes.BOOLEAN,
                defaultValue: true,
            }
        }, {
            schema: process.env.SCHEMA,
            tableName: "canvas_bot",
            timestamps: false,
        }
    );
    return CanvasBot;
};
