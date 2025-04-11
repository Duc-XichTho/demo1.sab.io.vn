import {DataTypes} from "sequelize";
import {config} from "dotenv"; config();

export const createDuAnModel = async (sequelize) => {
    const DuAn = sequelize.define(
        "duAn",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            DT: {
                type: DataTypes.DECIMAL,
            },
            CF: {
                type: DataTypes.DECIMAL,
            },
            dauKy: {
                type: DataTypes.DECIMAL,
            },
            code: {
                type: DataTypes.STRING,
            },
            name: {
                type: DataTypes.STRING,
            },
            ngay_bat_dau: {
                type: DataTypes.DATEONLY,
            },
            ngay_ket_thuc: {
                type: DataTypes.DATEONLY,
            },
            trang_thai: {
                type: DataTypes.STRING,
            },
            mo_ta: {
                type: DataTypes.TEXT,
            },
            khach_hang: {
                type: DataTypes.TEXT,
            },
            ngan_sach: {
                type: DataTypes.DECIMAL,
            },
            loai : {
                type: DataTypes.STRING,
            },
            phan_loai : {
                type: DataTypes.STRING,
            },
            bo_phan : {
                type: DataTypes.STRING,
            },
            company: {
                type: DataTypes.STRING,
            },
            year: {
                type: DataTypes.STRING,
            },

            quan_ly_da: {
                type: DataTypes.TEXT,
            },
            tk_wip: {
                type: DataTypes.TEXT,
            },
            phan_tram_hoan_thanh: {
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
            tableName: "duAn",
            schema: process.env.SCHEMA,
        }
    );
    return DuAn;
};
