import { DataTypes } from "sequelize";
import { config } from "dotenv"; config();

export const createKHKDElementModel = async (sequelize) => {
    const KHKDElement = sequelize.define(
        "khkdElement",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            userClass: {
                type: DataTypes.JSONB,
            },
            percentFormula: {
                type: DataTypes.JSONB,
            },
            chuKy :{
                type: DataTypes.JSONB,
            },
            lai :{
                type: DataTypes.JSONB,
            },
            name: {
                type: DataTypes.STRING,
            },
            phanLoai: {
                type: DataTypes.STRING,
            },
            khoanMuc: {
                type: DataTypes.STRING,
            },
            boPhan: {
                type: DataTypes.STRING,
            },
            labelSoLuong: {
                type: DataTypes.STRING,
            },
            data: {
                type: DataTypes.JSONB,
            },
            theoDoi: {
                type: DataTypes.BOOLEAN,
            },
            theoDoiDG: {
                type: DataTypes.BOOLEAN,
            },
            isPercentFormula: {
                type: DataTypes.BOOLEAN,
            },
            idKHKD: {
                type: DataTypes.INTEGER,
            },
            isDT: {
                type: DataTypes.BOOLEAN,
                defaultValue: true,
            },
            isSum: {
                type: DataTypes.BOOLEAN,
                defaultValue: true,
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
            tableName: "khkdElement",
            schema: process.env.SCHEMA,
        }
    );
    return KHKDElement;
};
