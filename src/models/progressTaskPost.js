import {
    DataTypes
} from "sequelize";
import {
    SCHEMA
} from './Z_CONST.js';

export const createProgressTaskPostModel = async (sequelize) => {
    const ProgressTaskPost = sequelize.define(
        "progressTaskPost", {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            progressTaskId: {
                type: DataTypes.INTEGER,
            },
            content: {
                type: DataTypes.TEXT,
            },
            createUser: {
                type: DataTypes.STRING,
            },
            show: {
                type: DataTypes.BOOLEAN,
                defaultValue: true,
            }
        }, {
            tableName: "progressTaskPost",
            schema: SCHEMA,
            timestamps: true,
        }
    );
    return ProgressTaskPost;
};