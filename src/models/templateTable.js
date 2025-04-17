import {DataTypes} from "sequelize";
import {config} from "dotenv"; config();

export const createTemplateTableModel = async (sequelize) => {
    const TemplateTable = sequelize.define(
        "template_table",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            setting: {
                type: DataTypes.JSONB,
                allowNull: true,
            },
            isCombine: {
                type: DataTypes.BOOLEAN,
                defaultValue: false,
            },
            fileNote_id: {
                type: DataTypes.INTEGER,
            },
            plan_id: {
                type: DataTypes.INTEGER,
            },
            deployment_id: {
                type: DataTypes.INTEGER,
            },
            data_original_id: {
                type: DataTypes.INTEGER,
            },
            viewer: {
                type: DataTypes.JSONB,
                allowNull: true,
            },
            mother_table_id: {
                type: DataTypes.INTEGER,
                allowNull: true,
            },
            mother_rotate_columns: {
                type: DataTypes.JSONB,
                allowNull: true,
            },
            table_type:{
                type: DataTypes.STRING,
                allowNull: true,
            },
            show: {
                type: DataTypes.BOOLEAN,
                defaultValue: true,
            },
        },
        {
            tableName: "template_table",
            timestamps: false,
            schema: process.env.SCHEMA,
        }
    );
    return TemplateTable;
};
