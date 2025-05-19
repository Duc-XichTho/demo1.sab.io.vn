import {DataTypes} from "sequelize";
import {config} from "dotenv"; config();

export const createOnboardingGuideModel = async (sequelize) => {
    const OnboardingGuide = sequelize.define(
        "onboardingGuide",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            component_name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            slides: {
                type: DataTypes.JSONB,
                defaultValue: [],
            },
            tabs: {
                type: DataTypes.JSONB,
                defaultValue: [],
            },
            created_at: {
                type: DataTypes.STRING,
            },
            updated_at: {
                type: DataTypes.STRING,
            },
            user_create: {
                type: DataTypes.STRING,
            },
            user_update: {
                type: DataTypes.STRING,
            },
            show: {
                type: DataTypes.BOOLEAN,
                defaultValue: true,
            },
        },
        {
            tableName: "onboardingGuide",
            schema: process.env.SCHEMA,
        }
    );
    return OnboardingGuide;
}; 