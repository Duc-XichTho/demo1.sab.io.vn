import {config} from "dotenv";

config();
import {DataTypes} from 'sequelize';

export const createNoteChartModel = async (sequelize) => {
    const NoteChart = sequelize.define(
        'notechart',
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            chartTitle: {
                type: DataTypes.TEXT,
                allowNull: true,
            },
            content: {
                type: DataTypes.TEXT,
                allowNull: true,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            show: {
                type: DataTypes.BOOLEAN,
                defaultValue: true,
            },
            info : {
                type: DataTypes.JSONB,
            },
            type: {
                type: DataTypes.STRING,
                allowNull: true,
            },
        },
        {
            schema: process.env.SCHEMA,
            tableName: 'notechart',
            timestamps: false,
        }
    );

    return NoteChart;
};
