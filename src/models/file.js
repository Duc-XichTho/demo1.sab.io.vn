import {config} from "dotenv"; config();
import {DataTypes} from "sequelize";

export const createFileModel = async (sequelize) => {
    const FileALL = sequelize.define(
        "files",
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            name: {
                type: DataTypes.STRING,
            },
            url: {
                type: DataTypes.TEXT,
            },
            type: {
                type: DataTypes.STRING,
            },
            table: {
                type: DataTypes.STRING,
            },
            table_id: {
                type: DataTypes.STRING,
            },
            card_input_id: {
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
                defaultValue:true,
            },


        },
        {
            schema: process.env.SCHEMA,
            tableName: "files",
            timestamps: false,
        }
    );

    return FileALL;
};
