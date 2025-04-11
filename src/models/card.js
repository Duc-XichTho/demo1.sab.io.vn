import {DataTypes} from "sequelize";
import {config} from "dotenv"; config();

export const createCardModel = async (sequelize) => {
    const Card = sequelize.define(
        "card",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            phieu_lq: {
                type: DataTypes.JSONB,
            },
            code: {
                type: DataTypes.STRING,
            },
            company: {
                type: DataTypes.STRING,
            },
            year: {
                type: DataTypes.STRING,
            },
            name: {
                type: DataTypes.TEXT,
            },
            so_tien: {
                type: DataTypes.TEXT
            },
            mo_ta: {
                type: DataTypes.TEXT,
            },
            mo_ta2: {
                type: DataTypes.TEXT,
            },
            hoa_don: {
                type: DataTypes.STRING,
            },
            cong_ty: {
                type: DataTypes.TEXT,
            },
            template_id: {
                type: DataTypes.INTEGER,
            },
            chain_id: {
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
            tableName: "card",
            schema: process.env.SCHEMA,
        }
    );
    return Card;
};
