import {config} from "dotenv"; config();
import {DataTypes} from "sequelize";

export const createFileNotePadModel = async (sequelize) => {
    const FileNotePad = sequelize.define(
        "fileNote",
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            tag_id: {
                type: DataTypes.STRING,
            },
            userClass: {
                type: DataTypes.JSONB,
            },
            name: {
                type: DataTypes.STRING,
            },
            code: {
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
            tab: {
                type: DataTypes.STRING,
            },
            table_id: {
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
            position: {
                type: DataTypes.INTEGER,
            },
            plan_canvas: {
                type: DataTypes.JSONB,
            },
            info: {
                type: DataTypes.JSONB,
                defaultValue: {
                    hide: false,
                },
            },
            show: {
                type: DataTypes.BOOLEAN,
                defaultValue: true,
            },
        },
        {
            schema: process.env.SCHEMA,
            tableName: "fileNote",
            timestamps: false,
        }
    );

    FileNotePad.addHook("beforeCreate", async (fileNote, options) => {
        const maxPosition = await FileNotePad.max("position", {
            where: {
                tab: fileNote.tab,
            },
        });

        fileNote.position = maxPosition ? maxPosition + 1 : 1;
    });

    return FileNotePad;
};
