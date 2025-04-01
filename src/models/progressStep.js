import {
    DataTypes
} from "sequelize";
import {
    SCHEMA
} from './Z_CONST.js';

export const createProgressStepModel = async (sequelize) => {
    const ProgressStep = sequelize.define(
        "progressStep", {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            progressId: {
                type: DataTypes.INTEGER,
            },
            title: {
                type: DataTypes.STRING,
            },
            status: {
                type: DataTypes.STRING,
            },
            isLocked: {
                type: DataTypes.BOOLEAN,
                defaultValue: false,
            },
            pic: {
                type: DataTypes.JSONB
            },
            cat: {
                type: DataTypes.JSONB
            },
            tag: {
                type: DataTypes.JSONB
            },
            position: {
                type: DataTypes.INTEGER,
            },
            show: {
                type: DataTypes.BOOLEAN,
                defaultValue: true,
            }
        }, {
            tableName: "progressStep",
            schema: SCHEMA,
        }
    );
    return ProgressStep;
};