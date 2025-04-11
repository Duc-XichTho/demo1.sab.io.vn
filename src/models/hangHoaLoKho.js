import {DataTypes} from "sequelize";
import {config} from "dotenv"; config();

export const createHangHoaLoKhoModel = async (sequelize) => {
    const HangHoaLoKho = sequelize.define(
        "hangHoaLoKho",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            company: {
                type: DataTypes.STRING,
            },
            id_hang_hoa_lo: {
                type: DataTypes.INTEGER,
            },
            so_luong: {
                type: DataTypes.INTEGER,
            },
            trang_thai: {
                type: DataTypes.BOOLEAN,
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
            tableName: "hangHoaLoKho",
            schema: process.env.SCHEMA,
        }
    );
    return HangHoaLoKho;
};
