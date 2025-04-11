import {
    DataTypes
} from "sequelize";
import {config} from "dotenv"; config();

export const createCanvasNotepadModel = async (sequelize) => {
    const CanvasNotepad = sequelize.define(
        "canvas_notepad",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            content: {
                type: DataTypes.TEXT,
            },
            canvasContainerId: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            show: {
                type: DataTypes.BOOLEAN,
                defaultValue: true,
            }
        }, {
            schema: process.env.SCHEMA,
            tableName: "canvas_notepad",
            timestamps: false,
        }
    );
    return CanvasNotepad;
};