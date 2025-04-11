import {
    DataTypes
} from "sequelize";
import {config} from "dotenv"; config();

export const createProgressTaskPostModel = async (sequelize) => {
    const ProgressTaskPost = sequelize.define(
        "progressTaskPost",
        {
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
            schema: process.env.SCHEMA,
            timestamps: true,
        }
    );
    return ProgressTaskPost;
};