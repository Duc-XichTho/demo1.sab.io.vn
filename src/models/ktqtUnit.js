import { SCHEMA } from './Z_CONST.js';
import {DataTypes} from 'sequelize';

export const createKTQTUnitModel = async (sequelize) => {
    const KTQTUnit = sequelize.define(
        'ktqtUnit',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            code: {
                type: DataTypes.TEXT,
            },
            name: {
                type: DataTypes.TEXT,
            },
            dp: {
                type: DataTypes.TEXT,
            },
            dp1: {
                type: DataTypes.TEXT,
            },
            dp2: {
                type: DataTypes.TEXT,
            },
            company: {
                type: DataTypes.TEXT,
                allowNull: true,
            },
            createAt: {
                type: DataTypes.TEXT,
                allowNull: true,
            },
            group: {
                type: DataTypes.TEXT,
                allowNull: true,
            },
            groupKH: {
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
        }
    );
    return KTQTUnit;
};
