import {DataTypes} from "sequelize";
import {config} from "dotenv"; config();

export const createMappingCardModel = async (sequelize) => {
    const MappingCard = sequelize.define(
        "mappingCard",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            field: {
                type: DataTypes.STRING,
            },
            input_id: {
                type: DataTypes.INTEGER,
            },
            template_id: {
                type: DataTypes.INTEGER,
            },
            sheet_column_id: {
                type: DataTypes.INTEGER,
            },
            dinhKhoan_id: {
                type: DataTypes.INTEGER,
            },
            trang_thai: {
                type: DataTypes.STRING,
            },
            cau_truc: {
                type: DataTypes.JSONB,
            },
            created_at: {
                type: DataTypes.STRING,
            },
            updated_at: {
                type: DataTypes.STRING,
            },
            deleted_at: {
                type: DataTypes.STRING,
            },
            user_create: {
                type: DataTypes.STRING,
            },
            user_update: {
                type: DataTypes.STRING,
            },
            user_delete: {
                type: DataTypes.STRING,
            },
            show: {
                type: DataTypes.BOOLEAN,
                defaultValue: true,
            },
        },
        {
            tableName: "mappingCard",
            schema: process.env.SCHEMA,
        }
    );
    return MappingCard;
};
