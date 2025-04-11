import {DataTypes} from "sequelize";
import {config} from "dotenv"; config();

export const createCardInputModel = async (sequelize) => {
    const CardInput = sequelize.define(
        "cardInput",
        {
         id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            code : {
                type: DataTypes.STRING,
            },
            company : {
                type: DataTypes.STRING,
            },
            year : {
                type: DataTypes.STRING,
            },
            value: {
                type: DataTypes.TEXT,
            },
            card_id: {
                type: DataTypes.INTEGER,
            },
            input_id: {
                type: DataTypes.INTEGER,
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
            is_compulsory: {
                type: DataTypes.BOOLEAN,
                defaultValue: false,
            },
        },
        {
            tableName: "cardInput",
            schema: process.env.SCHEMA,
        }
    );
    return CardInput;
};
