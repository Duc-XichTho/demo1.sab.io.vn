import {DataTypes} from "sequelize";
import {config} from "dotenv"; config();

export const createThueModel = async (sequelize) => {
    const Thue = sequelize.define(
        "thue",
        {
         id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            code : {
                type: DataTypes.STRING,
            },
            company : {
                type: DataTypes.STRING,
            },
            year : {
                type: DataTypes.STRING,
            },
            loai_thue: {
                type: DataTypes.TEXT,
            },
            thue_suat: {
                type: DataTypes.DECIMAL,
            },
            pp_tinh: {
                type: DataTypes.TEXT,
            },
            tk_thue: {
                type: DataTypes.TEXT,
            },
            ky_ke_khai: {
                type: DataTypes.TEXT,
            },
            mau_to_khai: {
                type: DataTypes.TEXT,
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
            tableName: "thue",
            schema: process.env.SCHEMA,
        }
    );
    return Thue;
};
