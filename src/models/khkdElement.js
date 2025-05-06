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
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            khoanMuc: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            boPhan: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            labelSoLuong: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            data: {
                type: DataTypes.JSONB,
                allowNull: false,
            },
            theoDoi: {
                type: DataTypes.BOOLEAN,
                defaultValue: false,
            },
            idKHKD: {
                type: DataTypes.STRING,
                allowNull: false,
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