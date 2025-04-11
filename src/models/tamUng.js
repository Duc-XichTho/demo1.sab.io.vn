import {DataTypes} from "sequelize";
import {config} from "dotenv"; config();

export const createTamUngModel = async (sequelize) => {
    const TamUng = sequelize.define(
        " tamUng",
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
                defaultValue: null
            },
            id_card_create:{
                type: DataTypes.INTEGER,
                defaultValue: null
            },
            id_de_nghi_mua: {
                type: DataTypes.STRING,
                defaultValue: null
            },
            id_nhan_vien: {
                type: DataTypes.INTEGER,
                defaultValue: null
            },
            id_bo_phan: {
                type: DataTypes.INTEGER,
                defaultValue: null
            },
            ngay_du_kien_tam_ung: {
                type: DataTypes.STRING,
            },
            ngay_du_kien_hoan_ung: {
                type: DataTypes.STRING,
            },
            mo_ta: {
                type: DataTypes.TEXT,
            },
            tk_nhan_tien:{
                type: DataTypes.TEXT,
            },

            company: {
                type: DataTypes.STRING,
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
            tableName: "tamUng",
            schema: process.env.SCHEMA,
        }
    );
    return TamUng;
};
