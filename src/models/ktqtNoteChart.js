import { SCHEMA } from './Z_CONST.js';
import { DataTypes } from 'sequelize';

export const createKTQTNoteChartModel = async (sequelize) => {
    const KTQTNoteChart = sequelize.define(
        'ktqtNotechart',
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
           content : {
               type: DataTypes.TEXT,
               allowNull: true,
           },
            show: {
                type: DataTypes.BOOLEAN,
                defaultValue: true,
            },
        },
        {
            schema: SCHEMA,
            tableName: 'ktqtNotechart',
            timestamps: false,
        }
    );

    return KTQTNoteChart;
};
