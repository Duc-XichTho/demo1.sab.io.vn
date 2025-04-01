import {DataTypes} from "sequelize";
import {SCHEMA} from "./Z_CONST.js";

export const createKpi2CalculatorModel = async (sequelize) => {
    const kpi2Calculator = sequelize.define(
        "kpi2Calculator",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            name: {
                type: DataTypes.STRING,
            },
            kpiList: {
                type: DataTypes.JSONB,
            },
            varList: {
                type: DataTypes.JSONB,
            },
            period: {
                type: DataTypes.STRING,
            },
            calc: {
                type: DataTypes.JSONB,
            },
            benchmark: {
                type: DataTypes.JSONB,
                defaultValue: {}
            },
            benchmark1_name: {
                type: DataTypes.STRING,
                defaultValue: 'Benchmark 1'
            },
            benchmark2_name: {
                type: DataTypes.STRING,
                defaultValue: 'Benchmark 2'
            },
            show: {
                type: DataTypes.BOOLEAN,
                defaultValue: true,
            },
        },
        {
            tableName: "kpi2Calculator",
            schema: SCHEMA,
        }
    );
    return kpi2Calculator;
};
