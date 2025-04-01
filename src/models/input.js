import {DataTypes} from "sequelize";
import {SCHEMA} from './Z_CONST.js';

export const createInputModel = async (sequelize) => {
    const Input = sequelize.define(
        "input",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            template_id: {
                type: DataTypes.INTEGER,
            },
            code: {
                type: DataTypes.STRING,
            },
            company: {
                type: DataTypes.STRING,
            },
            year: {
                type: DataTypes.STRING,
            },
            label: {
                type: DataTypes.TEXT,
            },
            type_input: {
                type: DataTypes.TEXT,
            },
            size_input: {
                type: DataTypes.TEXT,
            },
            position: {
                type: DataTypes.INTEGER,
            },
            list_option: {
                type: DataTypes.TEXT,
            },
            sub_step_id: {
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
            default_value: {
                type: DataTypes.TEXT,
            },
            select_type: {
                type: DataTypes.TEXT,
            },
            data_select: {
                type: DataTypes.JSONB,
                defaultValue: []
            },
            cong_thuc: {
                type: DataTypes.JSONB,
                defaultValue: []
            },
            data_for_vlookup:{
                type: DataTypes.JSONB,
                defaultValue: []
            },
            column_selected_for_vlookup:{
                type: DataTypes.STRING,
            },
            is_read_only: {
                type: DataTypes.BOOLEAN,
                defaultValue: false,
            },
            is_compulsory: {
                type: DataTypes.BOOLEAN,
                defaultValue: false,
            },

            min_value: {
                type: DataTypes.STRING,
            },
            max_value: {
                type: DataTypes.STRING,
            },
            show: {
                type: DataTypes.BOOLEAN,
                defaultValue: true,
            },
        },
        {
            tableName: "input",
            schema: SCHEMA,
        }
    );
    return Input;
};
