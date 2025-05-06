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
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            setting: {
                type: DataTypes.JSONB,
                allowNull: false,
            },
            settingDongTien: {
                type: DataTypes.JSONB,
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
            tableName: "khkdTongHop",
            schema: process.env.SCHEMA,
        }
    );
    return KHKDTongHop;
}; 