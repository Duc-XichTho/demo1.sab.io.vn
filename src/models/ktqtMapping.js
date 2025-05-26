import { DataTypes } from "sequelize";
import { config } from "dotenv"; config();

export const createKtqtMappingModel = async (sequelize) => {
    const KtqtMapping = sequelize.define(
        "ktqtMapping",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            type: {
                type: DataTypes.STRING,
            },
            name: {
                type: DataTypes.STRING,
            },
            danhMuc: {
                type: DataTypes.TEXT,
            },
            nguon: {
                type: DataTypes.TEXT,
            },
            dich: {
                type: DataTypes.TEXT,
            },
            company: {
                type: DataTypes.TEXT,
            },
            createAt: {
                type: DataTypes.DATE,
                defaultValue: DataTypes.NOW,
            },
            updateAt: {
                type: DataTypes.DATE,
                defaultValue: DataTypes.NOW,
            },
            show: {
                type: DataTypes.BOOLEAN,
                defaultValue: true,
            },
        },
        {
            tableName: "ktqtMapping",
            schema: process.env.SCHEMA,
        }
    );
    return KtqtMapping;
};
