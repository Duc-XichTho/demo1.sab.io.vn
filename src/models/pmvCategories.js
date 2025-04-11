import {DataTypes} from "sequelize";
import {config} from "dotenv"; config();

export const createPMVCategoriesModel = async (sequelize) => {
    const PMVCategories = sequelize.define(
        "pmvCategories",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            name: {
                type: DataTypes.STRING,
            },
            category_type: {
                type: DataTypes.STRING,
            },
            group1: {
                type: DataTypes.STRING,
            },
            group2: {
                type: DataTypes.STRING,
            },
            group3: {
                type: DataTypes.STRING,
            },
            group4: {
                type: DataTypes.STRING,
            },
            group5: {
                type: DataTypes.STRING,
            },
            year: {
                type: DataTypes.STRING,
            },
            company: {
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
            tableName: "pmvCategories",
            schema: process.env.SCHEMA,
        }
    );
    return PMVCategories;
};
