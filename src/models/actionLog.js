import {DataTypes} from "sequelize";
import {SCHEMA} from './Z_CONST.js';

export const createActionLogModel = async (sequelize) => {
    const ActionLog = sequelize.define(
        "actionLog",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            company: {
                type: DataTypes.STRING,
            },
            table : {
                type: DataTypes.STRING,
            },
            target_id : {
                type: DataTypes.INTEGER,
            },
            mo_ta: {
                type: DataTypes.TEXT,
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
            tableName: "actionLog",
            schema: SCHEMA,
        }
    );
    return ActionLog;
};
