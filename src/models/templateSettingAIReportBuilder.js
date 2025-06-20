import { DataTypes } from "sequelize";
import { config } from "dotenv"; config();

export const createTemplateSettingAIReportBuilderModel = async (sequelize) => {
    const TemplateSettingAIReportBuilder = sequelize.define(
        "templateSettingAIReportBuilder",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            name: {
                type: DataTypes.STRING,
            },
            setting: {
                type: DataTypes.JSONB,
            },
            user_create: {
                type: DataTypes.STRING,
            },
            create_at: {
                type: DataTypes.STRING,
            },
            show: {
                type: DataTypes.BOOLEAN,
                defaultValue: true,
            }
        },
        {
            tableName: "templateSettingAIReportBuilder",
            schema: process.env.SCHEMA,
        }
    );
    return TemplateSettingAIReportBuilder;
}; 