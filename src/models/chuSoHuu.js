import {DataTypes} from "sequelize";
import {config} from "dotenv"; config();

export const createChuSoHuuModel = async (sequelize) => {
    const ChuSoHuu = sequelize.define(
        "chuSoHuu",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            company: {
                type: DataTypes.STRING,
            },
            code: {
                type: DataTypes.STRING,
            },
            name: {
                type: DataTypes.STRING,
            },
            loai: {
                type: DataTypes.STRING,
            },
            mst: {
                type: DataTypes.STRING,
            },
            so_cp_so_huu: {
                type: DataTypes.STRING,
            },
            menh_gia: {
                type: DataTypes.STRING,
            },
            note: {
                type: DataTypes.TEXT
            },
            mo_ta: {
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
            tableName: "chuSoHuu",
            schema: process.env.SCHEMA,
        }
    );
    return ChuSoHuu;
};
