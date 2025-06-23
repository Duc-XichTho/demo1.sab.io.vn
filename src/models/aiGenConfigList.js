import { DataTypes } from "sequelize";
import { config } from "dotenv"; config();

export const createAiGenConfigListModel = async (sequelize) => {
    const AiGenConfigList = sequelize.define(
        "aiGenConfigList",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            name: {
                type: DataTypes.STRING,
            },
            created_at: {
                type: DataTypes.STRING,
            },
            user_create: {
                type: DataTypes.STRING,
            },
            aiConfigs: {
                type: DataTypes.JSONB,
            },
            show: {
                type: DataTypes.BOOLEAN,
                defaultValue: true,
            }
        },
        {
            tableName: "aiGenConfigList",
            schema: process.env.SCHEMA,
        }
    );
    return AiGenConfigList;
}; 