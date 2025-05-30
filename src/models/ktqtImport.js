import { DataTypes } from "sequelize";
import { config } from "dotenv"; config();

export const createKtqtImportModel = async (sequelize) => {
    const KtqtImport = sequelize.define(
        "ktqtImport",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            soLuong: {
                type: DataTypes.DOUBLE,
            },
            phan_loai: {
                type: DataTypes.TEXT,
            },
            day: {
                type: DataTypes.INTEGER,
            },
            month: {
                type: DataTypes.INTEGER,
            },
            year: {
                type: DataTypes.INTEGER,
            },
            diengiai: {
                type: DataTypes.TEXT,
            },
            so_tien: {
                type: DataTypes.DOUBLE,
            },
            kmf: {
                type: DataTypes.TEXT,
            },
            kmfGoc: {
                type: DataTypes.TEXT,
            },
            project: {
                type: DataTypes.TEXT,
            },
            projectGoc: {
                type: DataTypes.TEXT,
            },
            unit_code: {
                type: DataTypes.TEXT,
            },
            unit_codeGoc: {
                type: DataTypes.TEXT,
            },
            product: {
                type: DataTypes.TEXT,
            },
            productGoc: {
                type: DataTypes.TEXT,
            },
            kenh: {
                type: DataTypes.TEXT,
            },
            kenhGoc: {
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
            tableName: "ktqtImport",
            schema: process.env.SCHEMA,
        }
    );
    return KtqtImport;
};
