import {DataTypes} from "sequelize";
import {config} from "dotenv"; config();

export const createStoryWebPageModel = async (sequelize) => {
    const StoryWebPage = sequelize.define(
        "storyWebPage",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            id_web_page: {
                type: DataTypes.INTEGER,
            },
            title : {
                type: DataTypes.STRING,
            },
            author : {
                type: DataTypes.STRING,
            },
            content : {
                type: DataTypes.TEXT,
            },
            trang_thai: {
                type: DataTypes.STRING,
            },
            created_at: {
                type: DataTypes.STRING,
            },
            updated_at: {
                type: DataTypes.STRING,
            },
            deleted_at: {
                type: DataTypes.STRING,
            },
            user_create: {
                type: DataTypes.STRING,
            },
            user_update: {
                type: DataTypes.STRING,
            },
            user_delete: {
                type: DataTypes.STRING,
            },
            show: {
                type: DataTypes.BOOLEAN,
                defaultValue: true,
            },
        },
        {
            tableName: "storyWebPage",
            schema: process.env.SCHEMA,
        }
    );
    return StoryWebPage;
};
