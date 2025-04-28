import {DataTypes} from "sequelize";
import {config} from "dotenv"; config();

export const createReportCanvasModel = async (sequelize) => {
    const ReportCanvas = sequelize.define(
        "reportCanvas",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            userClass: {
                type: DataTypes.JSONB,
            },
            code: {
                type: DataTypes.STRING,
            },
            name: {
                type: DataTypes.TEXT,
            },
            list_tag: {
                type: DataTypes.JSONB
            },
            user_class: {
                type: DataTypes.JSONB
            },
            info: {
                type: DataTypes.JSONB
            },
            type: {
                type: DataTypes.STRING,
            },
            tab: {
                type: DataTypes.STRING,
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
            position: {
                type: DataTypes.INTEGER,
            },
        },

        {
            tableName: "reportCanvas",
            schema: process.env.SCHEMA,
        }

    );
    ReportCanvas.addHook("beforeCreate", async (reportCanvas, options) => {
        const maxPosition = await ReportCanvas.max("position", {
            where: {
                tab: reportCanvas.tab,
            },
        });

        reportCanvas.position = maxPosition ? maxPosition + 1 : 1;
    });
    return ReportCanvas;
};
