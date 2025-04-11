import {DataTypes} from "sequelize";
import {config} from "dotenv"; config();

export const createHangHoaLoModel = async (sequelize) => {
    const HangHoaLo = sequelize.define(
        "hangHoaLo",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            company: {
                type: DataTypes.STRING,
            },
            gia_nhap: {
                type: DataTypes.DECIMAL,
            },
            don_vi :  {
                type: DataTypes.STRING,
            },
            ngay : {
                type: DataTypes.DATEONLY,
            },
            id_hang_hoa : {
                type: DataTypes.INTEGER,
            },
            id_lo : {
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
            tableName: "hangHoaLo",
            schema: process.env.SCHEMA,
        }
    );
    return HangHoaLo;
};
