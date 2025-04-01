import {
    DataTypes
} from "sequelize";
import {
    SCHEMA
} from './Z_CONST.js';

export const createDinhKhoanMapModel = async (sequelize) => {
    const DinhKhoanMap = sequelize.define(
        "dinhKhoanMap", {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            kqkd: {
                type: DataTypes.STRING,
            },
            thuChi: {
                type: DataTypes.STRING,
            },
            BU: {
                type: DataTypes.STRING,
            },
            tkNo_nhap: {
                type: DataTypes.STRING,
            },
            tkCo_nhap: {
                type: DataTypes.STRING,
            },
            giaTri_start: {
                type: DataTypes.INTEGER,
            },
            giaTri_end: {
                type: DataTypes.INTEGER,
            },
            keyword: {
                type: DataTypes.JSONB,
            },
            tkNo: {
                type: DataTypes.STRING,
            },
            tkCo: {
                type: DataTypes.STRING,
            },
            show: {
                type: DataTypes.BOOLEAN,
                defaultValue: true,
            },
        }, {
            schema: SCHEMA,
            tableName: "dinhKhoanMap",
            timestamps: false,
        }
    );
    return DinhKhoanMap;
};