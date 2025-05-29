import { DataTypes } from "sequelize";
import { config } from "dotenv"; config();

export const createKtqtImportHistoryModel = async (sequelize) => {
    const KtqtImportHistory = sequelize.define(
        "ktqtImportHistory",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            import_type: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            column: {
                type: DataTypes.JSONB,
            },
            data: {
                type: DataTypes.JSONB,
            },
            createAt: {
                type: DataTypes.STRING,
            },
            show: {
                type: DataTypes.BOOLEAN,
                defaultValue: true,
            },
        },
        {
            tableName: "ktqtImportHistory",
            schema: process.env.SCHEMA,
        }
    );
    return KtqtImportHistory;
}; 