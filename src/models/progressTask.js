import {
    DataTypes
} from "sequelize";
import {
    SCHEMA
} from './Z_CONST.js';

export const createProgressTaskModel = async (sequelize) => {
    const ProgressTask = sequelize.define(
        "progressTask", {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            stepId: {
                type: DataTypes.INTEGER,
            },
            title: {
                type: DataTypes.STRING,
            },
            pic: {
                type: DataTypes.STRING,
            },
            cat: {
                type: DataTypes.STRING,
            },
            tag: {
                type: DataTypes.STRING,
            },
            status: {
                type: DataTypes.BOOLEAN,
                defaultValue: false,
            },
            AConfirm: {
                type: DataTypes.BOOLEAN,
                defaultValue: false,
            },
            BConfirm: {
                type: DataTypes.BOOLEAN,
                defaultValue: false,
            },
            deadline: {
                type: DataTypes.STRING,
            },
            updateUser: {
                type: DataTypes.STRING
            },
            isHide: {
                type: DataTypes.BOOLEAN,
                defaultValue: false,
            },
            position: {
                type: DataTypes.INTEGER,
            },
            show: {
                type: DataTypes.BOOLEAN,
                defaultValue: true,
            }
        }, {
            tableName: "progressTask",
            schema: SCHEMA,
            timestamps: true,
        }
    );
    return ProgressTask;
};