import { DataTypes } from "sequelize";
import { config } from "dotenv"; config();

export const createKHKDTongHopModel = async (sequelize) => {
    const KHKDTongHop = sequelize.define(
        "khkdTongHop",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            userClass: {
                type: DataTypes.JSONB,
            },
            isOnlyTH: {
                type: DataTypes.BOOLEAN,
                defaultValue: false,
            },
            duyet :{
                type: DataTypes.BOOLEAN,
            },
            luyKeDL :{
                type: DataTypes.JSONB,
            },
            luyKeKPI :{
                type: DataTypes.JSONB,
            },
            chuKy :{
                type: DataTypes.JSONB,
            },
            month :{
                type: DataTypes.JSONB,
            },
            showBenchmark: {
                type: DataTypes.BOOLEAN,
                defaultValue: true,
            },
            showKPI: {
                type: DataTypes.BOOLEAN,
                defaultValue: true,
            },
            showBH: {
                type: DataTypes.BOOLEAN,
                defaultValue: true,
            },
            showDL: {
                type: DataTypes.BOOLEAN,
                defaultValue: true,
            },
            showKD: {
                type: DataTypes.BOOLEAN,
                defaultValue: true,
            },
            showDT: {
                type: DataTypes.BOOLEAN,
                defaultValue: true,
            },
            showDTFull: {
                type: DataTypes.BOOLEAN,
                defaultValue: true,
            },
            dauKy: {
                type: DataTypes.STRING,
            },
            name: {
                type: DataTypes.STRING,
            },
            info :{
                type: DataTypes.JSONB,
            },
            listKHKD: {
                type: DataTypes.JSONB,
            },
            listTemplate: {
                type: DataTypes.JSONB,
            },
            setting: {
                type: DataTypes.JSONB,
            },
            settingDongTien: {
                type: DataTypes.JSONB,
            },
            settingDongTienTC: {
                type: DataTypes.JSONB,
            },
            settingDongTienDT: {
                type: DataTypes.JSONB,
            },
            created_at: {
                type: DataTypes.DATE,
                defaultValue: DataTypes.NOW,
            },
            updated_at: {
                type: DataTypes.DATE,
                defaultValue: DataTypes.NOW,
            },
            deleted_at: {
                type: DataTypes.DATE,
                allowNull: true,
            },
            show: {
                type: DataTypes.BOOLEAN,
                defaultValue: true,
            },
        },
        {
            tableName: "khkdTongHop",
            schema: process.env.SCHEMA,
        }
    );
    return KHKDTongHop;
};
