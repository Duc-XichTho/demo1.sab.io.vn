import {DataTypes} from "sequelize";
import {config} from "dotenv";

config();

export const createCanvasContainerModel = async (sequelize) => {
    const CanvasContainer = sequelize.define(
        "CanvasContainer",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            title: {
                type: DataTypes.STRING,
            },
			show_chart: {
				type : DataTypes.BOOLEAN,
				default : false,
			},
            description: {
                type: DataTypes.TEXT,
            },
            x: {
                type: DataTypes.INTEGER,
            },
            y: {
                type: DataTypes.INTEGER,
            },
            w: {
                type: DataTypes.INTEGER,
            },
            h: {
                type: DataTypes.INTEGER,
            },
            companySelect: {
                type: DataTypes.STRING,
            },
            buSelect: {
                type: DataTypes.STRING,
            },
            tabSelect: {
                type: DataTypes.STRING,
            },
            siderSelect: {
                type: DataTypes.STRING,
            },
            link: {
                type: DataTypes.TEXT,
            },
            child: {
                type: DataTypes.STRING,
            },
            type: {
                type: DataTypes.STRING,
            },
            mode :{
                type: DataTypes.STRING,
            },
            code: {
                type: DataTypes.STRING,
            },
        }, {
            tableName: "canvasContainer",
            schema: process.env.SCHEMA,
        }
    );
    return CanvasContainer;
};