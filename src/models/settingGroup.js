import {DataTypes} from "sequelize";
import {SCHEMA} from './Z_CONST.js';

export const createSettingGroupModel = async (sequelize) => {
    const SettingGroup = sequelize.define(
        "settingGroup",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            groupType: {
                type: DataTypes.STRING,
            },
            name: {
                type: DataTypes.STRING,
            },
            type: {
                type: DataTypes.STRING,
            },
            stt: {
                type: DataTypes.STRING,
            },
            phan_loai: {
                type: DataTypes.STRING,
            },

            show: {
                type: DataTypes.BOOLEAN,
                defaultValue: true,
            },
        },
        {
            tableName: "settingGroup",
            schema: SCHEMA,
        }
    );
    return SettingGroup;
};
