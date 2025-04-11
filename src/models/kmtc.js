import {DataTypes} from "sequelize";
import {config} from "dotenv"; config();

export const createKmtcModel = async (sequelize) => {
    const Kmtc = sequelize.define(
        "kmtc",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            code: {
                type: DataTypes.STRING,
            },
            name: {
                type: DataTypes.STRING,
            },
            company: {
                type: DataTypes.STRING,
            },
            year: {
                type: DataTypes.STRING,
            },
            ma_kmtc: {
                type: DataTypes.TEXT,
            },
            loai: {
                type: DataTypes.TEXT,
            },
            phan_loai: {
                type: DataTypes.STRING,
            },
            tinh_chat: {
                type: DataTypes.STRING,
            },
            nhom_kmtc: {
                type: DataTypes.STRING,
            },
            tk_hach_toan: {
                type: DataTypes.JSONB,
            },
            yeu_cau_duyet: {
                type: DataTypes.STRING,
            },
            han_muc_duyet: {
                type: DataTypes.DECIMAL,
            },
            trang_thai: {
                type: DataTypes.STRING,
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
            tableName: "kmtc",
            schema: process.env.SCHEMA,
        }
    );
    return Kmtc;
};
