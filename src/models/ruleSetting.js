import {DataTypes} from "sequelize";
import {config} from "dotenv"; config();

export const createRuleSettingModel = async (sequelize) => {
    const RuleSetting = sequelize.define(
        "ruleSetting",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            company: {
                type: DataTypes.STRING,
            },
            name : {
                type: DataTypes.STRING,
            },
            rule: {
                type: DataTypes.JSONB,
            },
            type : {
                type: DataTypes.STRING,
            },
            table : {
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
        },
        {
            tableName: "ruleSetting",
            schema: process.env.SCHEMA,
        }
    );
    return RuleSetting;
};
